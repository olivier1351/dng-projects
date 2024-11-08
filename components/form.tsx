"use client"

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .email("Invalid email format")
    .min(1, "Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .min(1, "Password is required"),
  confirmPassword: z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .min(1, "Password is required"),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Password do not match",
        path: ['confirmPassword']
      });
    };
});

type FormData = z.infer<typeof schema>;


const CreateAccountForm = () => {
    const router = useRouter(); // Initialize the router for redirection

    const [prefillEmail, setPrefillEmail] = useState<string | null>(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const pageEmail = urlParams.get("pageEmail");
        if (pageEmail) {
          setPrefillEmail(pageEmail);
        }
      }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),

  });
  useEffect(() => {
    if (prefillEmail) {
      setValue("email", prefillEmail);
    }
  }, [prefillEmail, setValue]);
  const simulateRegistration = ( data: FormData) => {
    console.log("Registration data:", data);
    setTimeout(() => {

      toast.success("Account created successfully!");
      router.push("/workflowBuilder");
    }, 1000);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted with data:", data);  // Debugging line
    simulateRegistration(data);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-6">Create an Account to acces the WorkFlow Builder</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
          type="text"
            id="firstName"
            placeholder="First Name"
            {...register("firstName")}
            error={errors.firstName?.message}
          />
        </div>
        <div>
          <Input
          type="text"
            id="lastName"
            placeholder="Last Name"
            {...register("lastName")}
            error={errors.lastName?.message}
          />
        </div>
        <div>
          <Input
            id="Email"
            type="email"
            placeholder="Email"
            {...register("email")}
            error={errors.email?.message}
            helpText=""
          />
        </div>
        <div>
          <Input
            id="Password"
            type="password"
            placeholder="Password"
            {...register("password")}
            error={errors.password?.message}
            helpText=""
          />
        </div>
        <div>
          <Input
            id="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
            helpText=""
          />
        </div>

        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
      <Toaster/>
    </div>
  );
};

export default CreateAccountForm;

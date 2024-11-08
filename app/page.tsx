'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const router = useRouter();

   const emailSchema = z.string().email("Please enter a valid email.");

   const handleNavigate = () => {
     const result = emailSchema.safeParse(email);

    if (result.success) {
       router.push(`/create-user?pageEmail=${encodeURIComponent(email)}`);
    } else {
       setEmailError(result.error.errors[0].message);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-end sm:items-end">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          type="email"
          className="mt-1"
          error={emailError || undefined}

        />
        <Button
          onClick={handleNavigate}
          className="font-sans font-bold text-white"
          variant="default"
        >
          Create User Account
        </Button>
      </main>
    </div>
  );
}

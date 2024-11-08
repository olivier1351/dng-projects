import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for conditional classnames

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helpText?: string;
  error?: string | undefined; // Ensure `error` is either a string or undefined
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "email", placeholder, label, helpText, error, ...props }, ref) => {
    const dynamicLabel = label || (props.id ? ` ${props.id}` : "Insert your Email");

    return (
      <div className="relative w-full">
        <label htmlFor={props.id} className="text-md font-sans font-bold text-black block mb-1">
          {dynamicLabel}
        </label>

        <input
          type={type}
          id={props.id}
          placeholder={placeholder}
          className={cn(
            "peer flex font-sans border-greyBorder h-10 w-full rounded-md border gg-transparent px-4 py-2 text-base text-black shadow-sm transition-all placeholder:text-gray-500 focus:outline-none focus:border-blueBorderFocus focus:shadow-[0px_0px_4px_0px_#1C4ED84D] disabled:cursor-not-allowed disabled:opacity-50",
            "hover:border-lightGreyBorder", // hover effect
            "focus:border-blueBorderFocus", // focus effect
            error ? "border-red-500" : "", // error styling
            className
          )}
          ref={ref}
          {...props}
        />

        {error && (
          <p className="text-sm font-sans font-normal text-red-500 mt-1">{error}</p>
        )}

        {helpText && <p className="text-sm font-sans font-normal text-gray-500 mt-1">{helpText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

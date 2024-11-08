import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center sm:px-3 sm:text-xs sm:py-2 md:text-md md:px-5 md:py-2.5 lg:text-lg lg:px-8 lg:py-4 xl:px-10 xl:py-5 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primaryBlue cursor-pointer  border-2 border-transparent text-primary-foreground  hover:bg-primaryBlueHover focus-within:border-blueBorder focus:border-blueBorder focus-within:border-2 focus:border-2 focus-within:border-blueBorder focus:border-blueBorder focus-visible:border-blueBorder focus-within:border-2 focus:border-2 disable:bg-blueDisable",
        outline:
          "bg-white text-darkGrey text-sm w-full border-lightGrey  borderRadius-sm border leading-none hover:bg-lightGrey focus-within:border-blueBorder focus:border-blueBorder focus-within:border-2 focus:border-2 disable:text-disable",

        link: "text-primary underline-offset-4 hover:underline focus:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default", // Default variant if no variant is passed
      size: "default", // Default size if no size is passed
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

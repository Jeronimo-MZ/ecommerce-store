import { ComponentProps, forwardRef } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<"button">;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          "w-auto rounded-full bg-black hover:bg-gray-800 px-4 py-2 outline-none text-white font-semibold border-0",
          "focus:ring-2 ring-offset-2 ring-black focus:hover:ring-gray-800",
          "disabled:cursor-not-allowed disabled:bg-gray-500",
          className,
        )}
        disabled={disabled}
        type={type}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

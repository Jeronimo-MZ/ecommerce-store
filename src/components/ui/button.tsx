import { LoaderIcon } from "lucide-react";
import { ComponentProps, forwardRef } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<"button"> & {
  loading?: boolean;
};
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, type = "button", loading = false, ...props }, ref) => {
    if (loading) {
      props.children = (
        <>
          <LoaderIcon className="animate-spin" size={20} />
          <span className="sr-only">Loading...</span>
        </>
      );
    }
    return (
      <button
        className={cn(
          "w-auto rounded-full bg-black hover:bg-gray-800 px-4 py-2 outline-none text-white font-semibold border-0",
          "focus:ring-2 ring-offset-2 ring-black focus:hover:ring-gray-800",
          "disabled:cursor-not-allowed disabled:bg-gray-500",
          "flex items-center justify-center",
          className,
        )}
        disabled={disabled || loading}
        type={type}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

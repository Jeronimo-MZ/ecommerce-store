import { ComponentProps, MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

type IconButtonProps = ComponentProps<"button"> & {
  icon: React.ReactElement;
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, className, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;

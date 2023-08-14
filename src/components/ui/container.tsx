import { ComponentProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div">;

export const Container = ({ children, className }: PropsWithChildren<ContainerProps>) => {
  return <div className={cn("mx-auto max-w-7xl w-full", className)}>{children}</div>;
};

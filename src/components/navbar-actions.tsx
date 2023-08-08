import { ShoppingBagIcon } from "lucide-react";

import { Button } from "./ui/button";

export const NavbarActions = () => {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center gap-x-2">
        <ShoppingBagIcon size={20} color="white" />
        <span className="text-md font-medium">99+</span>
      </Button>
    </div>
  );
};

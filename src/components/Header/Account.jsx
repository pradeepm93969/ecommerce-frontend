import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";

const Account = () => {
  return (
    <div className="cursor-pointer">
      <UserIcon
        className="h-6 w-6 md:h-4 md:w-4 text-secondary-700 hover:text-secondary-500"
        style={{ strokeWidth: 2 }}
      />
    </div>
  );
};

export default Account;

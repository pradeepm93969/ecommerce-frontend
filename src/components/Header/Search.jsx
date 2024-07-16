import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const Search = () => {
  return (
    <div
      className="text-secondary-800 hover:text-secondary-400 cursor-pointer
     md:border-secondary-500 md:w-48 md:border md:rounded-md flex justify-between items-center md:p-2"
    >
      <div className="text-xs text-secondary-400 hidden md:block">Search</div>
      <div className="font-medium">
        <MagnifyingGlassIcon
          className="h-6 w-6 md:h-4 md:w-4 text-secondary-700 hover:text-secondary-500"
          style={{ strokeWidth: 2 }}
        />
      </div>
    </div>
  );
};

export default Search;

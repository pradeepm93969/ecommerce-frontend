import Image from "next/image";
import React from "react";

const CountrySelection = () => {
  return (
    <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="51.3 0 342 342">
        <rect y="0" fill="#FFFFFF" width="513" height="342" />
        <rect y="0" fill="#009e49" width="513" height="114" />
        <rect y="228" fill="#000" width="513" height="114" />
        <rect y="0" fill="#ce1126" width="171" height="342" />
      </svg>
    </div>
  );
};

export default CountrySelection;

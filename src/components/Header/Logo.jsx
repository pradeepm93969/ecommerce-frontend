import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="flex justify-center items-center text-secondary-700 text-2xl md:text-3xl font-bold">
          FashionStore
        </div>
      </Link>
    </div>
  );
};

export default Logo;

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const menuData = [
  { name: "Women", url: "/women/overview" },
  { name: "Men", url: "/men/overview" },
  { name: "Kids", url: "/kids/overview" },
  { name: "Home", url: "/home/overview" },
];

const HeaderMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Load selected category from localStorage on component mount
    const storedCategory = localStorage.getItem("mainCategory");
    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }
  }, []);

  const handleMenuClick = (name) => {
    // Save selected category to localStorage and state
    localStorage.setItem("mainCategory", name);
    setSelectedCategory(name);
  };

  return (
    <>
      {menuData.map((data, index) => (
        <Link href={data.url} passHref key={index}>
          <div
            className={`pb-1 mx-4 cursor-pointer text-secondary-500 hover:text-secondary-900 text-xs font-medium hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] ${
              selectedCategory === data.name
                ? "text-secondary-900 border-b-4 border-secondary-900 [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]"
                : ""
            }`}
            onClick={() => handleMenuClick(data.name)}
          >
            {data.name}
          </div>
        </Link>
      ))}
    </>
  );
};

export default HeaderMenu;

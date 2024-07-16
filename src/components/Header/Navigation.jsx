"use client";

import navigation from "@/data/NavigationData";
import React, { useEffect, useState } from "react";

const getSelectedMainCategory = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("mainCategory");
  }
  return navigation.categories[0].id;
};

const Navigation = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const selectedMainCategory = getSelectedMainCategory();
    if (selectedMainCategory) {
      const category = navigation.categories.find(
        (category) => category.name === selectedMainCategory
      );
      setSelectedCategory(category);
    }
  }, []);

  return (
    <div className="hidden md:flex relative w-full px-8 pt-1 space-x-6 cursor-pointer text-secondary-500 text-xs h-7 font-medium border-b border-secondary-100">
      {selectedCategory?.sections.map((section, index) => (
        <div className="group flex items-center" key={index}>
          <span
            className="hover:text-secondary-900 hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]
            border-b-4 border-transparent pb-1 hover:border-secondary-200"
          >
            {section.name}
          </span>
          <div className="absolute top-9 left-0 hidden w-full group-hover:block bg-white shadow-lg rounded-lg pb-4 px-10">
            <ul>
              <li className="py-2 font-bold text-secondary-700">Shop By</li>
              {section.items.map((item) => (
                <li key={item.name} className="hover:text-secondary-600 py-1">
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navigation;

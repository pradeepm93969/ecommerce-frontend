"use client";

import { useEffect, useState } from "react";
import TopHeader from "./TopHeader";

import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import Account from "./Account";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import LanguageSelection from "./LanguageSelection";
import CountrySelection from "./CountrySelection";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileServiceMenuOpen, setMobileServiceMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServiceMenuOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServiceMenuOpen(!isMobileServiceMenuOpen);
  };

  return (
    <header
      className={`flex flex-col z-40 fixed w-full ${
        isScrolled ? "-top-8 " : "top-0"
      } transition-all duration-300 ease-in-out `}
    >
      <TopHeader />
      <MobileMenu />

      <div className="md:px-5 h-16 max-w-full border-b border-secondary-100 md:border-none">
        <div className="grid grid-cols-12 items-center h-full">
          <div className="hidden md:flex col-span-5">
            <HeaderMenu />
          </div>

          <div className="flex col-span-6 md:col-span-2 justify-start md:justify-center items-center">
            <div className="md:hidden cursor-pointer px-3">
              <Bars3Icon
                onClick={openMobileMenu}
                className="h-8 w-8 text-secondary-700"
              />
            </div>
            <Logo />
          </div>

          <div className="flex col-span-6 md:col-span-5 items-center justify-end gap-4 px-3">
            <Search />
            <Account />
            <Wishlist />
            <Cart />
            <div className="hidden md:flex">
              <CountrySelection />
            </div>
            <div className="hidden md:flex">
              <LanguageSelection />
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;

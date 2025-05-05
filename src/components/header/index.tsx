"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import IconMenuClose from "../../../public/images/icon-menu-close.svg";
import IconMenu from "../../../public/images/icon-menu.svg";
import Logo from "../../../public/images/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menus = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white-page">
      <div className="flex justify-between items-center h-[6.25rem] px-4">
        <Image src={Logo} alt="logo" />
        <Image
          src={IconMenu}
          alt="icon-menu"
          className="hover:cursor-pointer lg:hidden"
          onClick={() => setIsOpen(true)}
        />
        <ul className="font-bold lg:flex lg:flex-row hover:cursor-pointer gap-16 text-gray-500 hidden">
          {menus.map((value, key) => (
            <li key={`menu-${key + 1}`}>{value}</li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setIsOpen(false)}
        onKeyUp={() => {}}
        className={twMerge(
          "fixed bg-black inset-0 opacity-25 transition-all duration-400 -translate-x-full",
          isOpen ? "translate-x-0" : "",
        )}
      />

      <div
        className={twMerge(
          "fixed top-0 right-0 w-3/5 h-full bg-white-page transition-all duration-500 translate-x-full",
          isOpen ? "translate-x-0" : "",
        )}
      >
        <div className="flex items-center justify-end pr-4 h-[6.25rem]">
          <Image
            src={IconMenuClose}
            alt="icon-menu-close"
            className="size-10 hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="pt-[4.5rem] space-y-[2.625rem] px-8 font-bold">
          {menus.map((value, key) => (
            <li key={`menu-${key + 1}`}>{value}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}

'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "./NavMenu.module.css";
import { useState } from "react";

export default function NavMenu() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <header>
      <nav className="fixed flex bg-home-blue text-white w-[100vw] justify-between items-center h-[148px] z-50 overflow-hidden">
        <Link href={"/"} className="p-8 flex-shrink-0">
          <Image
            src="/logo.svg" // Route of the image file
            width={161}
            height={110}
            alt="High Desert Milk Logo"
          />
        </Link>
        <ul className="flex text-2xl font-light">
  <li className="md:block hidden">
    <Link
      href="/"
      className="p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white"
    >
      Home
    </Link>
  </li>
  <li className="md:block hidden">
    <Link
      href="/products"
      className="p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white"
    >
      Products
    </Link>
  </li>
  <li className="md:block hidden">
    <Link
      href="/impact"
      className="p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white"
    >
      Impact
    </Link>
  </li>
  <li className="md:block hidden">
    <Link
      href="/contact"
      className="p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white mr-8"
    >
      Contact
    </Link>
  </li>
  <li className="flex items-center justify-center relative">
  <button onClick={() => setIsChecked(!isChecked)} className="text-5xl font-arial md:hidden mr-8 hover:bg-blue-900 rounded active:text-home-blue active:bg-white align-middle pb-2">☰</button>
  {isChecked && (
    <div className={`fixed top-0 bottom-0 left-0 right-0 bg-home-blue text-center`}>
      <button onClick={() => setIsChecked(!isChecked)} className="text-2xl font-rslab absolute top-4 right-4 p-1 pr-2 pl-2 cursor-pointer rounded hover:bg-blue-900 active:text-home-blue active:bg-white text-white">X</button>
      {/* Dropdown menu items */}
      <div className="flex flex-col justify-center gap-4 h-full">
        <Link href="/" onClick={() => setIsChecked(false)} className="p-2 w-[200px] ml-auto mr-auto hover:bg-blue-900 rounded active:text-home-blue active:bg-white">Home</Link>
        <Link href="/products" onClick={() => setIsChecked(false)} className="p-2 w-[200px] ml-auto mr-auto hover:bg-blue-900 rounded active:text-home-blue active:bg-white">Products</Link>
        <Link href="/impact" onClick={() => setIsChecked(false)} className="p-2 w-[200px] ml-auto mr-auto hover:bg-blue-900 rounded active:text-home-blue active:bg-white">Impact</Link>
        <Link href="/contact" onClick={() => setIsChecked(false)} className="p-2 w-[200px] ml-auto mr-auto hover:bg-blue-900 rounded active:text-home-blue active:bg-white">Contact</Link>
      </div>
    </div>
  )}
</li>
</ul>
      </nav>
    </header>
  );
}

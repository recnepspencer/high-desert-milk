import Image from "next/image";
import Link from "next/link";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <header>
      <nav className="fixed flex bg-home-blue text-white w-full justify-between items-center h-[148px] z-50 ">
        <Link href={"/"} className="p-8 flex-shrink-0">
          <Image
            src="/logo.svg" // Route of the image file
            width={161}
            height={110}
            alt="High Desert Milk Logo"
          />
        </Link>
        <ul className="flex text-2xl  font-light">
          <li>
            <Link
              href="/"
              className={
                "p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={
                "p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white"}>
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/impact"
              className={
                "p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white"}>
              Impact
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                "p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white"}>
              Contact
            </Link>
          </li>
        
        </ul>
      </nav>
    </header>
  );
}

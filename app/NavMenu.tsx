'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
}

export default function NavMenu() {

  const { width } = useWindowDimensions();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [impactDropdown, setImpactDropdown] = useState(false);
  const [impactIsActive, setImpactIsActive] = useState(false);
  const [productIsActive, setProductIsActive] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProductClick = (e: any) => {
    e.stopPropagation();
    setProductIsActive(!productIsActive);
    setImpactIsActive(false);
  };

  useEffect(() => {
    const handleProductClickOutside = () => {
        setProductIsActive(false);
    };

    // Attach the listener to the window on mount.
    window.addEventListener('click', handleProductClickOutside);

    // Detach the listener from the window on unmount.
    return () => {
        window.removeEventListener('click', handleProductClickOutside);
    };
}, []);

  const handleClick = (e: any) => {
    e.stopPropagation();
    setImpactIsActive(!impactIsActive);
    setProductIsActive(false);
  };

  useEffect(() => {
    const handleWindowClick = () => {
      setImpactIsActive(false);
    };

    // Attach the listener to the window on mount.
    window.addEventListener('click', handleWindowClick);

    // Detach the listener from the window on unmount.
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <header>
      <nav className="fixed flex bg-home-blue text-white w-[100%] justify-between items-center h-[148px] z-50">
        {width > 768 ? (
          <div className="fixed flex bg-home-blue text-white w-[100vw] justify-between items-center h-[148px] z-50">
            <Link href="/" className="p-8 flex-shrink-0">
              <Image
                src="/logo.svg" // Route of the image file
                width={161}
                height={110}
                alt="High Desert Milk Logo"
              />
            </Link>
            <ul className="flex text-2xl font-light">
              <li>
                <Link
                  href="/"
                  className="p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white"
                >
                  Home
                </Link>
              </li>
              <li className="relative "
                onMouseEnter={() => setProductDropdown(true)}
                onMouseLeave={() => setProductDropdown(false)}
              >
                <Link
                  href="/products"
                  className="p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white"
                >
                  Products
                </Link>

                {productDropdown && (
                  <div className=" absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1 z-51" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link
                        href="/products/butter"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Butter
                      </Link>
                      <Link
                        href="/products/powder"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Powder
                      </Link>
                      <Link
                        href="/products/bulk"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Bulk
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li className="relative "
                onMouseEnter={() => setImpactDropdown(true)}
                onMouseLeave={() => setImpactDropdown(false)}
              >
                <Link
                  href="/impact"
                  className="p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white"
                >
                  Impact
                </Link>

                {impactDropdown && (
                  <div className=" absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1 z-51" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link
                        href="/impact/our-story"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Our Story
                      </Link>
                      <Link
                        href="/impact/our-community"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Our Community
                      </Link>
                      <Link
                        href="/impact/our-community/scholarship-application"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Scholarships
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/contact"
                  className="p-2 hover:bg-blue-900 rounded active:text-home-blue active:bg-white mr-8"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        ) : (
          <div className="fixed flex bg-home-blue text-white w-[100vw] justify-between items-center h-[148px] z-50 duration-100 ease-in-out">
            <Link href={"/"} className="p-8 flex-shrink-0">
              <Image
                src="/logo.svg" // Route of the image file
                width={161}
                height={110}
                alt="High Desert Milk Logo"
              />
            </Link>
            <button onClick={toggleMenu} className="text-5xl mr-8 cursor-pointer hover:text-6xl">☰</button>
          </div>

        )}

        {menuOpen && (
          <div className="fixed w-[50%] h-[1800px] rounded overflow-visible bg-home-blue flex items-center align-middle pt-[500px]">
            <ul className="pl-12 flex flex-col w-full">
              <li className="ml-auto mr-4 pb-12 text-2xl">
                <button onClick={toggleMenu} className="hover:bg-blue-900 active:text-home-blue active:bg-white rounded p-2">
                  &lt; &lt; &lt;
                </button>
                
              </li>
              <li className="mt-8">
                <Link onClick={() => setMenuOpen(false)} className="hover:bg-blue-900 active:text-home-blue active:bg-white rounded p-2 text-2xl" href="/">Home</Link>
              </li>
              <li className="mt-8 relative">
      <button className="hover:bg-blue-900 active:text-home-blue active:bg-white rounded p-2 text-2xl" onClick={handleProductClick}>Products</button>
      {productIsActive && (
        <div className="absolute top-0 left-28 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" onClick={handleProductClick}>
          <div className="py-1 z-50 relative" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            
                    <Link onClick={() => setMenuOpen(false)}
                        href="/products"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Products
                      </Link>
                      <Link onClick={() => setMenuOpen(false)}
                        href="/products/butter"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Butter
                      </Link>
                      <Link onClick={() => setMenuOpen(false)}
                        href="/products/powder"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900 z-[53]" role="menuitem"
                      >
                        Powder
                      </Link>
                      <Link onClick={() => setMenuOpen(false)}
                        href="/products/bulk"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Bulk
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li className="mt-8 relative">
      <button className="hover:bg-blue-900 active:text-home-blue active:bg-white rounded p-2 text-2xl" onClick={handleClick}>Impact</button>
      {impactIsActive && (
        <div className="absolute top-0 left-28 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" onClick={handleClick}>
          <div className="py-1 z-49" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            
                    <Link onClick={() => setMenuOpen(false)}
                        href="/impact"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Impact
                      </Link>
                      <Link onClick={() => setMenuOpen(false)}
                        href="/impact/our-story"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Our Story
                      </Link>
                      <Link onClick={() => setMenuOpen(false)}
                        href="/impact/our-community"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Our Community
                      </Link>
                      <Link onClick={() => setMenuOpen(false)}
                        href="/impact/our-community/scholarship-application"
                        className="block px-4 py-2 text-sm text-home-blue hover:bg-blue-300 hover:text-gray-900" role="menuitem"
                      >
                        Scholarships
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li className="mt-8">
                <Link className="hover:bg-blue-900 active:text-home-blue active:bg-white rounded p-2 text-2xl" href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>

        )}
      </nav>
    </header>
  );
}
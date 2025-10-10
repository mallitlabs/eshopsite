"use client"
import Link from "next/link";
import Logo from "./Logo";
import { LinkedinIcon, MoonIcon, SunIcon, TwitterIcon, ShoppingCartIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import { useCart } from "@/src/contexts/CartContext";
import CartDrawer from "../Cart/CartDrawer";

const Header = () => {

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const { toggleCart, getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

const toggle = () =>{
  setClick(!click)
}
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
        <Logo />

        <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200" 
            style={{
             transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
            }}
            
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              opacity: click ? 0 : 1
             }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
             }}
            >&nbsp;</span>
            </div>

          </div>
        </button>

        <nav className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem"
         }}

        >
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/categories/clubs" className="mx-2">Clubs</Link>
            <Link href="/categories/balls" className="mx-2">Balls</Link>
            <Link href="/categories/shoes" className="mx-2">Shoes</Link>
            <Link href="/categories/gloves" className="mx-2">Gloves</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>


        <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/categories/clubs" className="mx-2">Clubs</Link>
            <Link href="/categories/balls" className="mx-2">Balls</Link>
            <Link href="/categories/shoes" className="mx-2">Shoes</Link>
            <Link href="/categories/gloves" className="mx-2">Gloves</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>
        <div className=" hidden sm:flex items-center">
            <a href="https://linkedin.com" rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Follow us on LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href="https://x.com" rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Follow us on X" target="_blank"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>

            {/* Shopping Cart Icon */}
            <button
              onClick={toggleCart}
              className="relative inline-block w-6 h-6"
              aria-label="Shopping cart"
            >
              <ShoppingCartIcon className="hover:scale-125 transition-all ease duration-200 dark:stroke-light" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </span>
              )}
            </button>
        </div>
        <CartDrawer />
    </header>
  )
}

export default Header;
import type { NextComponentType } from "next";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { NavLink, NavUl } from "../../types/types";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { SlBasketLoaded } from "react-icons/sl";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar: NextComponentType = () => {
  const iconsSize = 30;
  const route = useRouter();
  let currentPage = route.pathname;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    currentPage = route.pathname;
  }, [route.pathname]);

  return (
    <>
      <nav className="bg-black text-white">
        <div className="flex items-center justify-between px-10 py-2">
          <h1 className="">Logo</h1>
          <div className="flex gap-5">
            <AiOutlineSearch size={iconsSize} />
            <AiOutlineUser size={iconsSize} />
            <SlBasketLoaded size={iconsSize} />
          </div>
        </div>
        <ul className=" flex w-screen  px-5 py-2">
          <NavLink href="/" currentPage={currentPage}>
            Home
          </NavLink>
          <NavUl title="Shop">
            <Link href={"/shop/new-arrivals"}>New Arrival</Link>
            <Link href={"/shop/restock"}>Restock</Link>
            <Link href={"/shop/pcb"}>PCB</Link>
            <Link href={"/shop/case"}>Case</Link>
          </NavUl>
          <NavUl title="Keyboard Category"></NavUl>
          <NavUl title="Group Buy"></NavUl>
          <NavUl title="Ready To Use"></NavUl>
        </ul>
      </nav>
    </>
  );
};

const NavLink = ({ children, href, currentPage }: NavLink) => {
  return (
    <>
      <Link
        className={`${
          currentPage === href ? "border-white" : "border-black"
        } border-b-2 px-3 duration-300 hover:border-white  `}
        href={href}
      >
        {children}
      </Link>
    </>
  );
};

const NavUl = ({ children, title }: NavUl) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <p
          className={`${
            isOpen ? "border-white" : "border-transparent"
          } w-fit border-b-2 px-3 pb-2 duration-300`}
        >
          {title} ▼
        </p>
        <div className="absolute">
          <div
            className={`${
              isOpen ? "visible" : "hidden"
            } relative flex w-52 flex-col border-b-2 border-white  bg-black py-5 pl-3`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

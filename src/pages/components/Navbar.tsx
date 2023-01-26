import { type NextComponentType } from "next";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { SlBasketLoaded } from "react-icons/sl";
import Link from "next/link";
import { useState } from "react";

const Navbar: NextComponentType = () => {
  const iconsSize = 30;
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
        <ul className=" flex w-screen border-b-2 border-black px-5 py-2">
          <Link className="pr-3" href="/">
            Home
          </Link>
          <NavUl title="Shop">
            <Link href={""}>New Arrival</Link>
            <Link href={""}>Restock</Link>
            <Link href={""}>PCB</Link>
            <Link href={""}>Case</Link>
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
          </NavUl>
          <NavUl title="Keyboard Category">
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
          </NavUl>
          <NavUl title="Group Buy">
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
          </NavUl>
          <NavUl title="Ready To Use">
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
            <Link href={""}>New Arrival</Link>
          </NavUl>
        </ul>
      </nav>
    </>
  );
};

const NavUl = ({ children, title }: any) => {
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

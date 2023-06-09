import { useState } from "react";
import { VscMenu,VscClose } from "react-icons/vsc";
import { icon2 } from "../assets";
import { navLinks } from "../constants";
import { RiPhoneFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("AnaSayfa");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={icon2} alt="hoobank" className="w-[124px] h-[45px]" />
    
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      <a href="tel:05492148686" className="text-black ml-10">
      <RiPhoneFill className="text-[#9F32B2]" size={30} /></a>
      <a href="tel:05492148686" className="text-black mx-10">
        0549 214 8686</a>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold cursor-pointer text-[16px] hover:opacity-50 duration-300 ${
              active === nav.title ? "text-[#9F32B2]" : "text-[#4f5d78]"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 text-[#9F32B2] justify-end items-center">
        {/*
        <img
          src={toggle ? close : <VscMenu size={2}/>}
          alt="menu"
          className="w-[28px] h-[28px] bg-[#9F32B2] object-contain"
          onClick={() => setToggle(!toggle)}
        />
          */}
          <button onClick={() => setToggle(!toggle)}>{ toggle ? <VscClose size={35}/>:  <VscMenu size={35}/>}
          </button>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#9F32B2] absolute top-20 right-0 mx-0 my-2 min-w-full rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins  font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-dimWhite" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link  to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { favicon, menu, close } from "../assets";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isActive, setIsActive] = useState(null);
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setIsActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={favicon} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Dhanya Bhatt
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={cn(
                "hover:text-white text-[18px] font-medium cursor-pointer",
                {
                  "text-white": isActive === link.id,
                  "text-secondary": isActive !== link.id,
                }
              )}
              onClick={() => {
                setIsActive(link.id);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={cn(
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl",
              {
                hidden: !toggle,
                flex: toggle,
              }
            )}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    "font-poppins font-medium cursor-pointer text-[16px]",
                    {
                      "text-white": isActive === link.id,
                      "text-secondary": isActive !== link.id,
                    }
                  )}
                  onClick={() => {
                    setToggle(!toggle);
                    setIsActive(link.id);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

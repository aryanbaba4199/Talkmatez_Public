"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";

import { DiTechcrunch } from "react-icons/di";
import { NavbarMenu } from "../../Context/Navmenu";
import { Link } from "react-router";





const Navbar = () => {
  const [top, setTop] = useState("0");
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setTop("0");
      } else {
        setTop("-80px"); 
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
        className="w-full h-[70px] px-8 bg-gray-100 backdrop-filter backdrop-blur-lg hidden md:flex justify-between items-center gap-4 shadow-sm shadow-gray-300 dark:shadow-gray-800 fixed z-10 transition-all duration-500"
        style={{ top: top }}
      >
        {/* Name Logo */}
        <p className="text-[#15892e] flex">
          <span className="text-3xl font-bold">Talkmatez</span>{" "}
          <DiTechcrunch />
        </p>
        <div className="h-full flex gap-4">
          {/* Navbar Links */}
          {NavbarMenu.map((navbar) => (
            <Link
            
              className={"text-[#15892e] font-semibold text-lg"}
              to={navbar.link}
              key={navbar.name}
            >
              <div className="h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4  border-[#15892e]  transition-all">
                {navbar.name}
              </div>
            </Link>
          ))}
        </div>
        
      </div>

      {/* Mobile Header */}
      {/* <NavbarMobile
        setShowMenu={setShowMenu}
        setThemeFun={setThemeFun}
        showMenu={showMenu}
        theme={theme}
        top={top}
      /> */}

      {/* SideMenu For Mobile Screen */}
      {/* <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} /> */}
    </Fragment>
  );
};

export default Navbar;
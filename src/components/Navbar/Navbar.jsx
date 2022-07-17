import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  useEffect(() => {
    if (width > 769) {
      setOpen(false);
    }
  }, [width, open]);

  return (
    <header>
      <div className='navbar'>
        <div className='nav__logo'>Logo</div>
        <ul className={`nav__menu ${open ? "show" : ""}`}>
          <li onClick={() => setOpen(false)}>
            <NavLink to='/' className='nav__menu--item'>
              Home
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to='/about' className='nav__menu--item'>
              About
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to='/services' className='nav__menu--item'>
              Services
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to='/contact' className='nav__menu--item'>
              Contact
            </NavLink>
          </li>
        </ul>

        <button className='toggle-btn' onClick={() => setOpen((prev) => !prev)}>
          {open ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
    </header>
  );
}

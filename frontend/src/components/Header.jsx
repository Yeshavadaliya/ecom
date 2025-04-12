import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import Navbar from "../components/Navbar";
import { useState, useContext } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext); 

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_conatiner w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween py-3 max-xs:px-2">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" height={66} width={88} />
          </Link>
        </div>

        {/* Navbar Desktop */}
        <Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-15" />

        {/* Navbar Mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex item start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-slate-900/5 transition-all duration-300"
              : "fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />

        {/* Buttons */}
        <div className="flexBetween sm:gap-x-2 bold-16">
          {/* Menu Button */}
          {!menuOpened ? (
            <MdMenu
              className="cursor-pointer hover:text-secondary mr-2 p-1 ring-slate-900/30 ring-1 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="cursor-pointer hover:text-secondary mr-2 p-1 ring-slate-900/30 ring-1 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          )}

          {/* Cart & Login Buttons */}
          <div className="flexBetween sm:gap-x-6">
            {/* Cart Icon */}
            <NavLink to="/cart-page" className="flex">
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">
                {getTotalCartItems()} 
              </span>
            </NavLink>

            {localStorage.getItem('auth-token') ? (
            <NavLink 
              onClick={() => {
                localStorage.removeItem('auth-token');
                window.location.replace("/");
              }} 
              to={'/logout'} 
              className="btn_secondary_rounded flexCenter gap-x-2 medium-16"
            >
              <img src={user} alt="User Icon" height={19} width={19} /> Logout
            </NavLink>
          ) : (
            <NavLink 
              to={'/login'} 
              className="btn_secondary_rounded flexCenter gap-x-2 medium-16"
            >
              <img src={user} alt="User Icon" height={19} width={19} /> Login
            </NavLink>
          )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

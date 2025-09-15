import React, { useState, useEffect } from "react";
import logo from "../assets/somethings/logo.png";
import { NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Header() {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [nickname, setNickname] = useState(null);

  // close/show header when scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // load nick and ava from the localstorage
  useEffect(() => {
    const storedAvatar = localStorage.getItem("avatar");
    const storedNickname = localStorage.getItem("nickname");
    if (storedAvatar) setAvatar(storedAvatar);
    if (storedNickname) setNickname(storedNickname);

    const handleStorageChange = () => {
      const newAvatar = localStorage.getItem("avatar");
      const newNickname = localStorage.getItem("nickname");
      setAvatar(newAvatar);
      setNickname(newNickname);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // close menu when scroll down
  useEffect(() => {
    if (!menuOpen) return;

    const handleScroll = () => {
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const avatarLetter = user?.email ? user.email.charAt(0).toUpperCase() : null;

  const handleLogout = async () => {
    await signOut(auth);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-center z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-3 mt-4 bg-[#111] rounded-full border border-gray-800 shadow-lg">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-white font-semibold">YourBanK</span>
        </div>
        <nav className="hidden md:flex gap-6 text-xl">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "text-white hover:text-lime-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "text-white hover:text-lime-400"
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "text-white hover:text-lime-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/security"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "text-white hover:text-lime-400"
            }
          >
            Security
          </NavLink>
        </nav>
        <div className="flex items-center gap-4 relative">
          {user ? (
            <div>
              {/* ava */}
              <div
                className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-lime-400"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {avatar ? (
                  <img
                    src={avatar}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-lime-400 flex items-center justify-center text-black font-bold">
                    {avatarLetter}
                  </div>
                )}
              </div>
              {menuOpen && (
                <div className="absolute right-0 mt-2 min-w-[160px] max-w-[250px] bg-[#111] rounded-xl shadow-lg py-2">
                  <p className="px-4 py-2 text-white text-sm font-semibold break-words text-center">
                    {nickname || user.email}
                  </p>

                  <NavLink
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-lime-400 hover:bg-gray-700 text-center"
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/settings"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-lime-400 hover:bg-gray-700 text-center"
                  >
                    Settings
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-center px-4 py-2 text-sm text-red-600 hover:bg-gray-700 "
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="text-white text-sm hover:text-lime-400 cursor-pointer">
                Sign Up
              </button>
              <button className="px-4 py-1.5 rounded-full bg-lime-400 text-black cursor-pointer font-medium text-sm hover:bg-lime-300 transition">
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

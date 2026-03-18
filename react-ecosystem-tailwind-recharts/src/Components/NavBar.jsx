import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

export const navbarItems = [
  {
    id: "nav-001",
    label: "Home",
    path: "/",
  },
  {
    id: "nav-002",
    label: "About",
    path: "/about",
  },
  {
    id: "nav-003",
    label: "Services",
    path: "/services",
    children: [
      {
        id: "nav-003-1",
        label: "Web Development",
        path: "/services/web",
      },
      {
        id: "nav-003-2",
        label: "App Development",
        path: "/services/app",
      },
    ],
  },
  {
    id: "nav-004",
    label: "Blog",
    path: "/blog",
  },
  {
    id: "nav-005",
    label: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <nav className="w-11/12 mx-auto mt-4">
      <button onClick={handleToggle} className="md:hidden absolute top-6">
        {open ? <X></X> : <Menu></Menu>}
        <ul
          className={`flex flex-col gap-2 bg-amber-400 p-3 rounded absolute transition-all duration-500 ${
            !open ? "-top-80 opacity-0" : "top-9 opacity-100"
          }`}
        >
          {navbarItems.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </button>
      <div className="flex justify-around items-center">
        <button className="max-w-10">
          <a href="/">
            <img src="../../public/icon.png" alt="Icon" />
          </a>
        </button>
        <ul className="md:flex gap-5 hidden">
          {navbarItems.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>

        {/* MY IMPLEMENTS */}
        {/* <ul className="flex gap-6">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul> */}
        <button className="btn btn-primary">Log In</button>
      </div>
    </nav>
  );
};

export default NavBar;

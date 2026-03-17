import React from "react";

const NavBar = () => {
  return (
    <nav className="w-11/12 mx-auto mt-4 flex justify-between items-center">
      <button className="max-w-10">
        <a href="/">
          <img src="../../public/icon.png" alt="Icon" />
        </a>
      </button>
      <ul className="flex gap-6">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <button className="btn btn-primary">Log In</button>
    </nav>
  );
};

export default NavBar;

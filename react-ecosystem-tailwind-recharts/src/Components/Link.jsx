import React from "react";

const Link = ({ route }) => {
  return (
    <li className="hover:bg-amber-600 p-2 rounded">
      <a href={route.path}>{route.label}</a>
    </li>
  );
};

export default Link;

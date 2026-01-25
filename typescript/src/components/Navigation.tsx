import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  pathName: string[];
}

const Navigation = ({ pathName }: Props) => {
  return (
    <nav className="flex justify-center bg-gray-800 text-white p rounded-2xl mb-8 shadow-lg shadow-black">
      {pathName.map((path) => (
        <NavLink
          key={path}
          to={path.length ? `/${path}` : "/"}
          className="m-4 p text-xl hover:underline"
        >
          {path.length ? path.charAt(0).toUpperCase() + path.slice(1) : "Home"}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;

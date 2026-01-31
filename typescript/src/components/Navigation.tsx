import React from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  pathName: string[];
}

const Navigation = ({ pathName }: Props) => {
  const location = useLocation();
  return (
    <nav className="flex justify-center p w-full bg-white border-b border-black/">
      {pathName.map((path) => (
        <NavLink
          key={path}
          to={path.length ? `/${path}` : "/"}
          className="m-4 p text-xl"
          style={
            location.pathname === `/${path}`
              ? { color: "red", textDecoration: "underline" }
              : {}
          }
        >
          {path.length ? path.charAt(0).toUpperCase() + path.slice(1) : "Home"}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;

import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;
  const header = location.charAt(1).toUpperCase() + location.slice(2);

  return (
    <h1 className="scroll-m-20 mt-5 mb-5 text-center text-4xl font-extrabold tracking-tight text-balance p-4">
      {header ? header : ""}
    </h1>
  );
};

export default Header;

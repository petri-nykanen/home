import React from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-teal-300 font-roboto-condensed">{children}</div>;
};

export default ThemeProvider;

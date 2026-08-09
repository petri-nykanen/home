import React from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white font-roboto-condensed">{children}</div>;
};

export default ThemeProvider;

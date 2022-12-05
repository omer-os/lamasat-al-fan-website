import React from "react";
import { NavBar, Footer } from "..";

export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>

      <Footer />
    </div>
  );
}

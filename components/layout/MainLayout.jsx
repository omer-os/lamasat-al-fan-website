import React from "react";
import { NavBar, Footer } from "..";

export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="mt-[4.6em]">{children}</div>

      <Footer />
    </div>
  );
}

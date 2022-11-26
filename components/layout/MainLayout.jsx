import Link from "next/link";
import React from "react";
import { NavBar, Footer } from "..";

export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="my-[4.6em]">{children}</div>

      <Footer />
    </div>
  );
}

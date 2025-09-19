import Navbar from "@/components/Navbar";
import React from "react";

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}

export default CommonLayout;

import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-8 flex items-center justify-between">
      <div className="text-xl font-bold">
        <Link href="/">NextJs</Link>
      </div>
      <div className="flex space-x-6">
        <Link href="/about" className="hover: text-gray-300">
          About
        </Link>
        <Link href="/contact" className="hover: text-gray-300">
          Contact
        </Link>
        <Link href="/login" className="hover: text-gray-300">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

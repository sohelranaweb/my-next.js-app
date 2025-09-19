"use client";
import { useRouter } from "next/navigation";
import React from "react";

function HomePage() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  };
  return (
    <div>
      <h1 className="text-4xl">Hello Next js</h1>

      <button onClick={handleNavigation}>Dashboard</button>
    </div>
  );
}

export default HomePage;

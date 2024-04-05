import Link from "next/link";
import React from "react";
import AddCars from "./features/addCars";
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-900 to-cyan-500 font-serif">
      <main className="flex flex-1 flex-col items-center justify-center p-24 text-white">
        <h1 className="text-5xl mb-5 font-bold">Welcome to CarVentory</h1>
      </main>
      <div>
      <AddCars/>
      </div>
    </div>
  );
}

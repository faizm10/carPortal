"use client";
import React from "react";
import { Input } from "@nextui-org/react";
export default function AddCars() {
  return (
    <div
      className="flex flex-col min-h-screen font-serif bg-cover" // Added bg-cover for full cover
    >
      <main className="flex flex-1 flex-col items-center justify-center p-24 text-white">
        <h1 className="text-5xl mb-5 font-bold">Add Cars</h1>
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 text-white">
            <Input
              type="text"
              label="Enter Car Model"
              placeholder="Toyota"
              labelPlacement="outside"
            />
            <Input
              type="text"
              label="Enter Car Type"
              placeholder="Camry"
              labelPlacement="outside"
            />
            <Input
              type="number"
              label="Year"
              placeholder="2005"
              labelPlacement="outside"
            />
            <Input
              type="number"
              label="Car Price"
              placeholder="55000.00"
              labelPlacement="outside"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

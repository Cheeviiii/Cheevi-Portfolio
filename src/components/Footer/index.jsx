import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-transparent flex gap-10 items-center justify-around bottom-0">
      <h1 className="font-bold text-2xl md:text-4xl uppercase text-blue-500">
        <span className="text-white">Che</span>evi
      </h1>
      <p className="text-sm md:text-base text-center">
        All rights reserved by &copy;Cheevi 2022
      </p>
    </footer>
  );
};

"use client";

import { scrollTo } from "@/lib/scrollTo";
import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Button } from "../ui/button";
import { useScroll } from "@/context/ScrollContext";

export function ScrollToTop() {
  const { visible } = useScroll();

  return (
    <>
      {visible && (
        <div className="fixed bottom-0 right-0 p-3 z-30">
          <Button
            onClick={() => scrollTo("about")}
            className="bg-black text-white dark:bg-white dark:text-black w-20 h-14 rounded-xl transition-transform hover:scale-110"
          >
            <MdKeyboardDoubleArrowUp size={72} />
          </Button>
        </div>
      )}
    </>
  );
}

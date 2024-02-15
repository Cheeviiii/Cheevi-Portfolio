"use client";

import { ReactNode, useEffect } from "react";

interface TopScrollProps {
  children: ReactNode;
}

export default function TopScrollAutomator({ children }: TopScrollProps) {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", scrollToTop);

    return () => window.removeEventListener("beforeunload", scrollToTop);
  }, []);

  return <>{children}</>;
}

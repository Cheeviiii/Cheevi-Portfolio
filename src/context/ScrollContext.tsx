"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface ScrollContextProps {
  visible: boolean;
}

interface ScrollProviderProps {
  children: React.ReactNode;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [visible, setVisible] = useState(false);
  const [prevScroll, setPrevScroll] = useState({
    y: 0,
    lastY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setPrevScroll((prevScroll) => {
        return {
          y: window.scrollY,
          lastY: prevScroll.y,
        };
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (prevScroll.y > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [prevScroll]);

  const contextValues: ScrollContextProps = {
    visible,
  };

  return <ScrollContext.Provider value={contextValues}>{children}</ScrollContext.Provider>;
};

export const useScroll = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }

  return context;
};

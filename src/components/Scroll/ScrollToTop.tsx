import { scrollTo } from "@/lib/scrollTo";
import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Button } from "../ui/button";

export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);
  const [prevScroll, setPrevScroll] = React.useState({
    y: 0,
    lastY: 0,
  });

  React.useEffect(() => {
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

  React.useEffect(() => {
    if (prevScroll.y > 250) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [prevScroll]);

  return (
    <>
      {visible && (
        <div className="fixed bottom-0 right-0 p-3 z-30">
          <Button onClick={() => scrollTo("about")} className="bg-red-500 text-white w-20 h-14 rounded-xl hover:bg-transparent hover:border hover:border-red-500">
            <MdKeyboardDoubleArrowUp size={72} />
          </Button>
        </div>
      )}
    </>
  );
}

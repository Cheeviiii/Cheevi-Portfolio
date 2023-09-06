import tw from "tailwind-styled-components";

type MobileNavProps = {
  $isopen: boolean;
};

export const Container = tw.div<MobileNavProps>`${(p) =>
  p.$isopen ? "block" : "hidden"} relative`;

export const Content = tw.div`flex items-center justify-center`;

export const Box = tw.div`fixed inset-0 z-50 bg-black/50 backdrop-blur-md`;

export const MenuBox = tw.div`fixed inset-0 flex items-center justify-center p-5`;

export const MenuContent = tw.div`bg-[#1b1b1b] border border-gray-500 rounded-3xl w-[500px] p-5`;

export const MenuLinkList = tw.ul`flex-row`;

export const MenuLink = tw.li`p-2 border-b cursor-pointer`;

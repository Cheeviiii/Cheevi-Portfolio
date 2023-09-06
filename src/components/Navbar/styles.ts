import tw from "tailwind-styled-components";

export const Container = tw.header`w-full flex-row items-center justify-between bg-black/25 p-5 shadow-2xl`;

export const Nav = tw.nav`flex items-center justify-between`;

export const Title = tw.a`text-3xl lowercase`

export const Span = tw.span`text-red-500`

export const ul = tw.ul`gap-5 hidden lg:flex`;

export const li = tw.li`text-xl cursor-pointer transition-colors hover:text-red-600`
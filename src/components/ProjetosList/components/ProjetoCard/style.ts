import tw from "tailwind-styled-components";

export const Container = tw.div`flex`;
export const Box = tw.div`w-[350px] h-[420px] flex flex-col justify-between gap-3 bg-[#2b2b2b] p-3 rounded`;

export const Title = tw.h1`font-bold text-lg text-center`;
export const Paragrafo = tw.p`font-normal text-base`;
export const Img = tw.img`w-[350px] rounded-3xl`;

export const LinkBox = tw.div`flex gap-2`;
export const Link = tw.a`bg-blue-500 hover:bg-blue-700 transition-colors duration-150 text-center rounded p-1 px-5 uppercase`;

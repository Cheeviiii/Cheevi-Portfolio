import tw from "tailwind-styled-components";

export const Container = tw.div`w-[300px] md:w-[500px] flex flex-col mb-4`;

export const Title = tw.h1`text-lg font-semibold`;

export const Content = tw.div`relative pt-2 flex items-center justify-center gap-2`;

export const Percentage = tw.div`block`

export const PercentageSpan = tw.span`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-[#333]`

export const PercentageProgressBox = tw.div`w-full flex h-2 overflow-hidden text-xs bg-[#555] rounded`

export const PercentageProgress = tw.div`flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap bg-red-500`
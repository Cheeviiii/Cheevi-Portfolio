import tw from "tailwind-styled-components"
import './animation.css'

export const Container = tw.section`container mx-auto py-24`

export const Content = tw.div`flex gap-10 items-center justify-center`

export const Box = tw.div`flex flex-col gap-10 items-center justify-center text-center`

export const H3 = tw.h3`text-3xl uppercase`

export const H1 = tw.h1`text-5xl font-bold`

export const Imagem = tw.img`w-64 animation-spin`

export const Span = tw.span`font-bold text-transparent text-red-500`

export const Title = tw.div`flex flex-col items-center justify-center gap-5`

export const P = tw.p`text-xl md:text-2xl font-normal`
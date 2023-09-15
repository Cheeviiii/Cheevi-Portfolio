import tw from 'tailwind-styled-components'

export const Container = tw.section`w-full flex flex-col items-center justify-center py-10`

export const Title = tw.h1`text-5xl font-bold mb-10`

export const Form = tw.form`flex flex-col items-center justify-center gap-2`

export const NomeEmail = tw.div`flex flex-col md:flex-row gap-2 md:gap-5`

export const Label = tw.label`flex flex-col`

export const Input = tw.input`w-[300px] h-[40px] rounded px-1 text-black border-2 focus:border-red-500 outline-none transition-colors`
export const InputSobre = tw.input`w-full h-[40px] rounded px-1 text-black border-2 focus:border-red-500 outline-none transition-colors`

export const Sobre = tw.div`w-full`

export const Assunto = tw.div`w-full`

export const Textarea = tw.textarea`resize-none px-1 h-48 rounded text-black focus:outline-none`

export const Button = tw.button`bg-red-500 px-5 h-10 rounded-3xl font-bold uppercase mt-2 hover:bg-red-800 transition-colors`
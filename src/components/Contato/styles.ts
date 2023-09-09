import tw from 'tailwind-styled-components'

export const Container = tw.section`w-full flex flex-col items-center justify-center py-10`

export const Title = tw.h1`text-5xl mb-10`

export const Form = tw.form`flex flex-col items-center justify-center gap-2`

export const NomeEmail = tw.div`flex gap-5`

export const Label = tw.label`flex flex-col`

export const Input = tw.input` px-1 text-black border-2 focus:border-red-500 rounded focus:outline-none transition-colors`

export const Sobre = tw.div`w-full`

export const Assunto = tw.div`w-full`

export const Textarea = tw.textarea`resize-none h-48 rounded text-black focus:outline-none`
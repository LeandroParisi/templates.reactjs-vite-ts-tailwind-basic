import { FormEvent, useRef } from 'react'
import { tv } from 'tailwind-variants'
import { input } from './input'

const className =
  'min-w-[50%] text-2xl rounded-md focus:outline-none h-auto min-h-[50px] max-h-fit overflow-hidden resize-none leading-10 ring-brand-tertiary border-slate-200 text-lg w-full'

const textArea = tv({
  extend: input,
  base: className
})

export function TextArea(props: React.HTMLProps<HTMLTextAreaElement>) {
  const textRef = useRef<HTMLTextAreaElement>(null)

  function expandTextArea() {
    if (textRef.current) {
      textRef.current.style.height = 'auto'
      textRef.current.style.height = `${textRef.current.scrollHeight}px`
    }
  }

  function handleChange(e: FormEvent<HTMLTextAreaElement>) {
    if (props.onInput) {
      props.onInput(e)
    }
    expandTextArea()
  }

  return (
    <textarea
      {...props}
      className={textArea()}
      ref={textRef}
      onInput={handleChange}
    />
  )
}

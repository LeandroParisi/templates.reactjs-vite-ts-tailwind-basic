/* eslint-disable max-len */
import { tv } from 'tailwind-variants'

const className =
  'border-2 bg-transparent inline-block text-center text-decoration-none py-7 px-9 text-lg uppercase font-bold rounded-md transform transition duration-500 hover:scale-100 disabled:opacity-70 disabled:cursor-wait flex gap-4'

const colors = {
  primary:
    'bg-[#5bad24] hover:bg-transparent active:bg-transparent border-brand-primary hover:text-brand-primary active:text-brand-primary [&>svg]:text-white [&>svg]:hover:text-brand-primary [&>svg]:active:text-brand-primary',
  secondary:
    'bg-[#7624AD] hover:bg-transparent active:bg-transparent border-brand-secondary hover:text-brand-secondary active:text-brand-secondary [&>svg]:text-white [&>svg]:hover:text-brand-secondary [&>svg]:active:text-brand-secondary ',
  tertiary:
    'bg-[#008B7C] hover:bg-transparent active:bg-transparent border-brand-tertiary hover:text-brand-tertiary active:text-brand-tertiary [&>svg]:text-white [&>svg]:hover:text-brand-tertiary [&>svg]:active:text-brand-tertiary'
}

export const button = tv({
  base: className,
  variants: {
    color: {
      // transparent: 'text-dark_blue_2 dark:text-dark_blue_1',
      /* DISABLED DARK THEME FOR NOW */
      transparent: 'text-dark_blue_2',
      primary: `border-2 border-brand-primary text-white ${colors.primary}`,
      secondary: `border-2 border-brand-secondary text-white ${colors.secondary}`,
      tertiary: `border-2 border-brand-secondary text-white ${colors.tertiary}`
    }
  }
})

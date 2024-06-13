import { tv } from 'tailwind-variants'

const className =
  'before:content-[attr(data-text)] before:z-50 before:absolute before:top-5 before:translate-y-[50%] before:p-2 before:rounded-md before:bg-black  before:text-white  before:text-center before:text-sm before:hidden hover:before:block before:left-0 relative before:min-w-max before:bg-opacity-75'

// Example usage
// <div className={tooltipTL()} data-text={`tooltip-text`}>
//   <InnerComponent />
// </div>
export const tooltipTL = tv({
  base: `${className} before:left-0 before:top-[-30px]`
})

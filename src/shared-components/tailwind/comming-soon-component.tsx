import { tv } from 'tailwind-variants'
import { tooltipBL } from './tooltip-bl'
import { tooltipTL } from './tooltip-tl'

// Example usage:
{
  /* <button className={commingSoonComponentTL({ className: 'relative before:-top-28' })} data-text={t('common:comming-soon.title')}>
<FaceSmileIcon height={20} width={20} className="text-whatsapp-sidebar_header_icons_color text-2xl cursor-pointer" />
</button> */
}

export const commingSoonComponentTL = tv({
  extend: tooltipTL,
  base: 'cursor-not-allowed before:opacity-100 [&_*]:cursor-not-allowed'
})

export const commingSoonComponentBL = tv({
  extend: tooltipBL,
  base: 'cursor-not-allowed before:opacity-100 [&_*]:cursor-not-allowed'
})

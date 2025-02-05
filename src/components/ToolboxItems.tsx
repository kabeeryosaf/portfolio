import { Fragment } from 'react'
import { TechIcon } from './TechIcon'
import { twMerge } from 'tailwind-merge'

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperclassName
}: {
  items: {
    title: string
    iconType: React.ElementType
  }[]
  className?: string
  itemsWrapperclassName?: string
}) => {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <div
        className={twMerge(
          'flex py-0.5 flex-none gap-6 pr-6',
          itemsWrapperclassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map(item => (
              <div
                key={item.title}
                className='inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg'
              >
                <TechIcon component={item.iconType} />
                <span className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent '>
                  {item.title}
                </span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

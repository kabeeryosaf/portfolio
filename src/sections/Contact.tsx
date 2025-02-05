// import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
// import grainImage from '@/assets/images/grain.jpg'

// export const ContactSection = () => {
//   return (
//     <div id='contact' className='py-16 pt-14 lg:py-24 lg:pt-20 relative z-10'>
//       <div className='container'>
//         <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
//           <div className='flex flex-col md:flex-row md:gap-16 gap-8 items-center relative z-20'>
//             <div>
//               <h2 className='font-serif text-2xl md:text-3xl'>
//                 Let's create something amazing together
//               </h2>
//               <p className='text-sm mt-2 md:text-base'>
//                 Ready to bring your next project to life? Let's connect and
//                 discuss how I can help you achieve your goals.
//               </p>
//             </div>
//             <div>
//               <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:cursor-pointer'>
//                 <span className='font-semibold'>Contact Me</span>
//                 <ArrowUpRightIcon className='size-4' />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return (
    <div id='contact' className='py-16 pt-14 lg:py-24 lg:pt-20 relative z-10'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden'>
          <div className='flex flex-col md:flex-row md:gap-16 gap-8 items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>
                Let's create something amazing together
              </h2>
              <p className='text-sm mt-2 md:text-base'>
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:cursor-pointer'>
                <span className='font-semibold'>Contact Me</span>
                <ArrowUpRightIcon className='size-4' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
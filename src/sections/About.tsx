// 'use client'
// import AOS from "aos";
// import "aos/dist/aos.css";


// import Image from 'next/image'

// import { SectionHeader } from '@/components/SectionHeader'
// import { Card } from '@/components/Card'
// import { TechIcon } from '@/components/TechIcon'
// import { CardHeader } from '@/components/CardHeader'

// import JavascriptIcon from '@/assets/icons/square-js.svg'
// import HtmlIcon from '@/assets/icons/html5.svg'
// import CssIcon from '@/assets/icons/css3.svg'
// import ReactIcon from '@/assets/icons/react.svg'
// import GithubIcon from '@/assets/icons/github.svg'
// import StarIcon from '@/assets/icons/star.svg'
// import TailwindIcon from '@/assets/icons/tailwind.svg'

// import BookImage from '@/assets/images/book-cover.png'
// import mapImage1 from '@/assets/images/map1.png'
// import smileMemoji from '@/assets/images/memoji-smile.png'
// import { ToolboxItems } from '@/components/ToolboxItems'
// import { motion } from 'framer-motion'
// import { useRef, useEffect } from 'react'

// const toolboxItems = [
//   {
//     title: 'JavaScript',
//     iconType: JavascriptIcon
//   },
//   {
//     title: 'HTML5',
//     iconType: HtmlIcon
//   },
//   {
//     title: 'CSS3',
//     iconType: CssIcon
//   },
//   {
//     title: 'React',
//     iconType: ReactIcon
//   },
//   {
//     title: 'GitHub',
//     iconType: GithubIcon
//   },
//   {
//     title: 'Tailwind',
//     iconType: TailwindIcon
//   }
// ]

// const hobbies = [
//   {
//     title: 'Typing',
//     emoji: '⌨️',
//     left: '5%',
//     top: '5%'
//   },
//   {
//     title: 'Photography',
//     emoji: '📷',
//     left: '50%',
//     top: '5%'
//   },
//   {
//     title: 'Hiking',
//     emoji: '🥾',
//     left: '35%',
//     top: '45%'
//   },
//   {
//     title: 'Gaming',
//     emoji: '🎮',
//     left: '10%',
//     top: '35%'
//   },
//   {
//     title: 'Biking',
//     emoji: '🚴🏻‍♂️',
//     left: '70%',
//     top: '45%'
//   },
//   {
//     title: 'Fitness',
//     emoji: '🏋🏻',
//     left: '5%',
//     top: '65%'
//   },
//   {
//     title: 'Reading',
//     emoji: '📖',
//     left: '45%',
//     top: '70%'
//   }
// ]

// export const AboutSection = () => {
//   const constraintRef = useRef(null)
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div id='about' className='py-20 lg:py-28'>
//       {' '}
//       {/* Main Div */}
//       <div className='container'>
//         <SectionHeader
//           eyebrow='About Me'
//           title='A Glimpse Into My World'
//           description='Learn more about who I am, what I do, and what inspires me'
//         />
//         <div className='mt-20 flex flex-col gap-8'>
//           {' '}
//           {/* Cards Div */}
//           <div className='grid sm:grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
//             <Card className='h-[340px] md:col-span-2 lg:col-span-1'>
//               <CardHeader
//                 title='My Reads'
//                 description='Explore the books shaping my perspectives'
//                 className='px-6 pt-6'
//               />
//               <div className='w-40 mx-auto mt-2 md:mt-2'>
//                 <Image src={BookImage} alt='book image' />
//               </div>
//             </Card>
//             <Card className='h-[340px] md:col-span-3 lg:col-span-2'>
//               <CardHeader
//                 title='My Toolbox'
//                 description='Explore the tools and technologies that I use to create digital experiences'
//                 className=''
//               />
//               <ToolboxItems
//                 items={toolboxItems}
//                 itemsWrapperclassName=' animate-moveLeft [animation-duration:30s]'
//               />
//               <ToolboxItems
//                 items={toolboxItems}
//                 className='mt-6'
//                 itemsWrapperclassName='-translate-x-1/2 animate-moveRight [animation-duration:20s]'
//               />
//             </Card>
//           </div>
//           <div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3 '>
//             <Card className='h-[340px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
//               <CardHeader
//                 title='My Interests'
//                 description='Explore my interests and hobbies beyond the digital realm'
//                 className='px-6 py-6'
//               />
//               <div className='relative flex-1' ref={constraintRef}>
//                 {hobbies.map(hobby => (
//                   <motion.div
//                     key={hobby.title}
//                     className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
//                     style={{
//                       left: hobby.left,
//                       top: hobby.top
//                     }}
//                     drag
//                     dragConstraints={constraintRef}
//                   >
//                     <span className='font-medium text-gray-950'>
//                       {hobby.title}
//                     </span>
//                     <span>{hobby.emoji}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </Card>
//             <Card className='h-[340px] p-0 relative md:col-span-2 lg:col-span-1 '>
//               <div>
//                 <Image
//                   src={mapImage1.src}
//                   alt='map'
//                   layout='fill'
//                   objectFit='cover'
//                   className='object-left-top'
//                 />
//                 <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[“”] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30'>
//                   <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
//                   <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
//                   <Image
//                     src={smileMemoji}
//                     alt='smiling Memoji'
//                     className='size-20'
//                   />
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import AOS from "aos";
import "aos/dist/aos.css";

import Image from 'next/image'

import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { TechIcon } from '@/components/TechIcon'
import { CardHeader } from '@/components/CardHeader'

import JavascriptIcon from '@/assets/icons/square-js.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import GithubIcon from '@/assets/icons/github.svg'
import StarIcon from '@/assets/icons/star.svg'
import TailwindIcon from '@/assets/icons/tailwind.svg'

import BookImage from '@/assets/images/book-cover.png'
import mapImage1 from '@/assets/images/map1.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import { ToolboxItems } from '@/components/ToolboxItems'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon
  },
  {
    title: 'CSS3',
    iconType: CssIcon
  },
  {
    title: 'React',
    iconType: ReactIcon
  },
  {
    title: 'GitHub',
    iconType: GithubIcon
  },
  {
    title: 'Tailwind',
    iconType: TailwindIcon
  }
]

const hobbies = [
  {
    title: 'Typing',
    emoji: '⌨️',
    left: '5%',
    top: '5%'
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top: '5%'
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: '35%',
    top: '45%'
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%'
  },
  {
    title: 'Biking',
    emoji: '🚴🏻‍♂️',
    left: '70%',
    top: '45%'
  },
  {
    title: 'Fitness',
    emoji: '🏋🏻',
    left: '5%',
    top: '65%'
  },
  {
    title: 'Reading',
    emoji: '📖',
    left: '45%',
    top: '70%'
  }
]

export const AboutSection = () => {
  const constraintRef = useRef(null)
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false, mirror:true, });
  }, []);

  return (
    <div id='about' className='py-20 lg:py-28'>
      {/* Main Div */}
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me'
        />
        <div className='mt-20 flex flex-col gap-8'>
          {/* Cards Div */}
          <div
            className='grid sm:grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'
          >
            {/* My Reads */}
            <Card
              className='h-[340px] md:col-span-2 lg:col-span-1'
              data-aos="fade-right"
            >
              <CardHeader
                title='My Reads'
                description='Explore the books shaping my perspectives'
                className='px-6 pt-6'
              />
              <div className='w-40 mx-auto mt-2 md:mt-2'>
                <Image src={BookImage} alt='book image' />
              </div>
            </Card>

            {/* My Toolbox */}
            <Card
              className='h-[340px] md:col-span-3 lg:col-span-2'
              data-aos="fade-up"
            >
              <CardHeader
                title='My Toolbox'
                description='Explore the tools and technologies that I use to create digital experiences'
                className=''
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperclassName=' animate-moveLeft [animation-duration:30s]'
              />
              <ToolboxItems
                items={toolboxItems}
                className='mt-6'
                itemsWrapperclassName='-translate-x-1/2 animate-moveRight [animation-duration:20s]'
              />
            </Card>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3'>
            {/* My Interests */}
            <Card
              className='h-[340px] p-0 flex flex-col md:col-span-3 lg:col-span-2'
              data-aos="fade-left"
            >
              <CardHeader
                title='My Interests'
                description='Explore my interests and hobbies beyond the digital realm'
                className='px-6 py-6'
              />
              <div className='relative flex-1' ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div
                    key={hobby.title}
                    className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                    style={{
                      left: hobby.left,
                      top: hobby.top
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className='font-medium text-gray-950'>
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* My Location */}
            <Card
              className='h-[340px] p-0 relative md:col-span-2 lg:col-span-1'
              data-aos="fade-up"
            >
              <div>
                <Image
                  src={mapImage1.src}
                  alt='map'
                  layout='fill'
                  objectFit='cover'
                  className='object-left-top'
                />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[“”] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30'>
                  <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                  <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                  <Image
                    src={smileMemoji}
                    alt='smiling Memoji'
                    className='size-20'
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

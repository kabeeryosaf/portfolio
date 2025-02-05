// import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png'
// import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png'
// import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png'
// import CheckCircleIcon from '@/assets/icons/check-circle.svg'
// import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
// import grainImage from '@/assets/images/grain.jpg'
// import { SectionHeader } from '@/components/SectionHeader'
// import { Card } from '@/components/Card'
// import Image from 'next/image'

// const portfolioProjects = [
//   {
//     company: 'Acme Corp',
//     year: '2022',
//     title: 'Dark Saas Landing Page',
//     results: [
//       { title: 'Enhanced user experience by 40%' },
//       { title: 'Improved site speed by 50%' },
//       { title: 'Increased mobile traffic by 35%' }
//     ],
//     link: 'https://youtu.be/4k7IdSLxh6w',
//     image: darkSaasLandingPage,
//     projectIndex: 1
//   },
//   {
//     company: 'Innovative Co',
//     year: '2021',
//     title: 'Light Saas Landing Page',
//     results: [
//       { title: 'Boosted sales by 20%' },
//       { title: 'Expanded customer reach by 35%' },
//       { title: 'Increased brand awareness by 15%' }
//     ],
//     link: 'https://youtu.be/7hi5zwO75yc',
//     image: lightSaasLandingPage,
//     projectIndex: 2,

//   },
//   {
//     company: 'Quantum Dynamics',
//     year: '2023',
//     title: 'AI Startup Landing Page',
//     results: [
//       { title: 'Enhanced user experience by 40%' },
//       { title: 'Improved site speed by 50%' },
//       { title: 'Increased mobile traffic by 35%' }
//     ],
//     link: 'https://youtu.be/Z7I5uSRHMHg',
//     image: aiStartupLandingPage,
//     projectIndex: 3,
//   }
// ]

// export const ProjectsSection = () => {
//   return (
//     <section id='projects' className='pb-16 lg:py-24'>
//       <div className='container'>
//         <SectionHeader eyebrow='Real-world Results' title='Featured Projects' description='See how I transformed concepts into engaging digital experiences' />
//         <div className='flex flex-col mt-10 gap-20 md:mt-20'>
//           {portfolioProjects.map((project, projectIndex) =>
//             <Card
//               key={project.title}
//               className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
//               style={{
//                 top: `calc(64px + ${projectIndex * 40}px`
//               }}
//             >
//               <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
//                 <div className='lg:pb-16'>
//                   <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
//                     <span>{project.company}</span>
//                     <span>&bull;</span>
//                     <span>{project.year}</span>
//                   </div>
//                   <h3 className='font-serif text-2xl mt-2 md:text-4xl md:mt-5'>
//                     {project.title}
//                   </h3>
//                   <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
//                   <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
//                     {project.results.map((result, index) => (
//                       <li
//                         key={index}
//                         className='flex gap-2 text-sm text-white/50 md:text-base'
//                       >
//                         <CheckCircleIcon className='size-5 md:size-6' />
//                         {result.title}
//                       </li>
//                     ))}
//                   </ul>
//                   <a href={project.link}>
//                     <button className='bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6'>
//                       <span>Visit Live Site</span>
//                       <ArrowUpRight className='size-4' />
//                     </button>
//                   </a>
//                 </div>
//                 <div className='relative'>
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
//                   />
//                 </div>
//               </div>
//             </Card>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
import AOS from "aos";
import "aos/dist/aos.css";

import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png'
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png'
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png'
import techweerPage from '@/assets/images/techweer.png'
import shellshift from '@/assets/images/shellshift.png'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
import { SectionHeader } from '@/components/SectionHeader'
import { Card } from '@/components/Card'
import { LinksCard } from "@/components/linksCard";
import Image from 'next/image'
import { useEffect } from 'react';

const portfolioProjects = [
  {
    company: 'Techweer',
    year: '2024',
    title: "Techweer's Portfolio",
    results: [
      { title: 'Fixed UI Designs' },
      { title: 'Improved site speed by 50%' },
      { title: 'Enabled smooth user experience%' }
    ],
    link: 'https://techweer.com/',
    image: techweerPage,
    projectIndex: 1
  },
  {
    company: 'ShellShift',
    year: '2021',
    title: 'Shellshift Website',
    results: [
      { title: 'Enhanced brand visibility' },
      { title: 'Improved user engagement' },
      { title: 'Better client trust' }
    ],
    link: 'https://shellshift.com/',
    image: shellshift,
    projectIndex: 2,
  },
]

const links = [
  { title: 'Google', href: 'https://www.google.com' },
  { title: 'GitHub', href: 'https://github.com' },
  { title: 'Twitter', href: 'https://twitter.com' },
  { title: 'LinkedIn', href: 'https://linkedin.com' },
  { title: 'Dribbble', href: 'https://dribbble.com' },
  { title: 'Behance', href: 'https://behance.net' },
  { title: 'Medium', href: 'https://medium.com' },
  { title: 'Notion', href: 'https://notion.so' },
  { title: 'Slack', href: 'https://slack.com' },
];

export const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false, mirror: true, });
  }, []);

  return (
    <section id='projects' className='pb-16 lg:py-24'>
      <div className='container'>
        {/* Section Header */}
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences'
        />

        {/* Projects */}
        <div className='flex flex-col mt-10 gap-20 md:mt-20'>
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20'
              data-aos="fade-up"
              data-aos-delay={projectIndex * 100} // Adds delay between animations
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                {/* Project Details */}
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className='font-serif text-2xl mt-2 md:text-4xl md:mt-5'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className='flex gap-2 text-sm text-white/50 md:text-base'
                      >
                        <CheckCircleIcon className='size-5 md:size-6' />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className='bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6'>
                      <span>Visit Live Site</span>
                      <ArrowUpRight className='size-4' />
                    </button>
                  </a>
                </div>

                {/* Project Image */}
                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  />
                </div>
              </div>
            </Card>
          ))}
          <LinksCard links={links} eyebrow="Other Projects"
        heading="Data Science Projects"/>
        </div>
      </div>
    </section>
  )
}

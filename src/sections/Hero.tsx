'use client';

import memojiImage from '@/assets/images/memoji-computer.png'
import personalPic1 from '@/assets/images/myImage.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import Image from 'next/image'
import { HeroOrbit } from '@/components/HeroOrbit'

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip mx-auto px-4'>
      <div
        className='absolute inset-0'
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)'
        }}
      >
        <div
          className='absolute inset-0 -z-30 opacity-5'
          style={{
            backgroundImage: `url(${grainImage.src})`
          }}
        ></div>
        <div className='hero-ring size-[680px]'></div>
        <div className='hero-ring size-[880px]'></div>
        <div className='hero-ring size-[1080px]'></div>
        <div className='hero-ring size-[1280px]'></div>
        <HeroOrbit
          size={460}
          rotation={-14}
          shouldOrbit
          orbitDuration='30s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-6 text-emerald-300 opacity-30' />
        </HeroOrbit>
        <HeroOrbit
          size={480}
          rotation={79}
          shouldOrbit
          orbitDuration='32s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-3 text-emerald-300 opacity-30' />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-41} shouldOrbit orbitDuration='34s'>
          <div className='size-1 bg-emerald-300 rounded-full opacity-30'></div>
        </HeroOrbit>
        <HeroOrbit
          size={560}
          rotation={178}
          shouldOrbit
          orbitDuration='36s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-8 text-emerald-300 opacity-30' />
        </HeroOrbit>
        <HeroOrbit
          size={600}
          rotation={20}
          shouldOrbit
          orbitDuration='38s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='size-12 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit
          size={610}
          rotation={98}
          shouldOrbit
          orbitDuration='40s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>
        <HeroOrbit size={690} rotation={-10} shouldOrbit orbitDuration='42s'>
          <div className='size-2 bg-emerald-300 rounded-full opacity-30'></div>
        </HeroOrbit>
        <HeroOrbit
          size={740}
          rotation={144}
          shouldOrbit
          orbitDuration='44s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-12 text-emerald-300 opacity-30' />
        </HeroOrbit>
        <HeroOrbit size={890} rotation={85} shouldOrbit orbitDuration='46s'>
          <div className='size-2 bg-emerald-300 rounded-full opacity-30'></div>
        </HeroOrbit>
        <HeroOrbit
          size={840}
          rotation={-72}
          shouldOrbit
          orbitDuration='48s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='size-28 text-emerald-300' />
        </HeroOrbit>
      </div>
      <div className='container mb-3 '>
        <div className='flex flex-col items-center'>
          {/* <Image
            src={personalPic1}
            alt='Memoji of a person on a computer'
            className='size-[100px] shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-lg
            border-gray-800 mb-2'
          /> */}
          <div className='relative mb-3'>
            <Image
              src={personalPic1}
              alt='Memoji of a person on a computer'
              className='size-[100px] relative z-10 rounded-full'
            />
            <div className='absolute inset-0 bg-white opacity-20 blur-sm rounded-full animate-glow w-full h-full'></div>
          </div>
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 relative rounded-full'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-pingLarge'></div>
            </div>
            <div className='text-sm font-medium'>
              Available for new projects
            </div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl'>
            Building Exceptional User Experiences
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            Hey{' '}
            <span className='text-[#6DE8B8] font-bold'>I&apos;m Kabir Yosaf</span>{' '}
            and I specialize in trasnforming designs into functional,
            high-performing web applications. I also have an expertise in{' '}
            <span className='font-bold text-[#6DE8B8]'>AI/ML</span>{' '}
            technologies.
          </p>
        </div>
        <div className='flex flex-col items-center mt-8 gap-4 md:flex-row justify-center relative z-10'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl' onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className='font-semibold'>Explore my work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className='font-semibold'>👋</span>
            <span>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}

'use client';
import { useState, useEffect } from 'react'
import Lenis from 'lenis';


export const Header = () => {
  const [lenisRef, setLenis] = useState<Lenis | null>(null);
  const [rafState, setRaf] = useState<number | null>(null)

  useEffect(() => {
    const scroller = new Lenis();
    let rf;

    function raf(time: number) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    rf = requestAnimationFrame(raf);
    setRaf(rf);
    setLenis(scroller);

    return () => {
      if (lenisRef && rafState !== null) {
        cancelAnimationFrame(rafState);
        lenisRef.destroy();
      }
    };
  }, []);

  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-10 '>
      <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        <a href='#' className='nav-item'>
          Home
        </a>
        <a href='#projects' className='nav-item'>
          Projects
        </a>
        <a href='#about' className='nav-item'>
          About
        </a>
        <a
          href='#contact'
          className='nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
        >
          Contact
        </a>
      </nav>
    </div>
  )
}

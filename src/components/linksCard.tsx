import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef } from 'react';

export const LinksCard = ({
  className,
  links,
  eyebrow,
  heading,
  ...other
}: ComponentPropsWithoutRef<'div'> & {
  links: { title: string; href: string }[];
  eyebrow: string;
  heading: string;
}) => {
  return (
    <div
      className={twMerge(
        'bg-gray-800 rounded-3xl overflow-hidden relative z-0 px-14 py-10 flex flex-col justify-between after:z-10 after:content-[""] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none',
        className
      )}
      {...other}
    >
      {/* Eyebrow and Heading */}
      <div className="mb-6 text-left">
        <p className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
          {eyebrow}
        </p>
        <h2 className="font-serif text-2xl mt-2 text-white md:text-3xl lg:text-4xl">
          {heading}
        </h2>
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-semibold transition-colors text-center"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

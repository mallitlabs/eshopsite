"use client";
import React from 'react';

const GolfBanner = () => {
  return (
    <div className='w-full inline-block'>
      <article className='mx-5 sm:mx-10 relative h-[25vh] sm:h-[30vh] rounded-3xl overflow-hidden'>

        {/* Gradient background - golf course inspired */}
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-900/30 dark:via-green-900/30 dark:to-teal-900/30' />

        {/* Decorative circles - golf balls */}
        <div className='absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/40 dark:bg-white/10 blur-3xl' />
        <div className='absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-green-400/20 dark:bg-green-600/20 blur-3xl' />

        {/* Golf flag icon - left side */}
        <div className='absolute left-8 sm:left-16 top-1/2 -translate-y-1/2 opacity-20 dark:opacity-10'>
          <svg width="80" height="120" viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="32" y1="8" x2="32" y2="88" className="stroke-dark dark:stroke-light" strokeWidth="3"/>
            <path d="M32 8 L58 22 L32 36 Z" className="fill-green-600 dark:fill-green-500"/>
            <ellipse cx="32" cy="88" rx="16" ry="4" className="fill-green-700/40 dark:fill-green-600/30"/>
          </svg>
        </div>

        {/* Golf tee and ball - right side */}
        <div className='absolute right-8 sm:right-16 bottom-8 opacity-15 dark:opacity-10 hidden md:block'>
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Tee */}
            <path d="M25 45 L30 75 L35 45 Z" className="fill-dark dark:fill-light"/>
            {/* Ball */}
            <circle cx="30" cy="35" r="12" className="fill-white dark:fill-gray-100"/>
            {/* Dimples */}
            <circle cx="26" cy="32" r="1.5" className="fill-gray-300"/>
            <circle cx="30" cy="30" r="1.5" className="fill-gray-300"/>
            <circle cx="34" cy="32" r="1.5" className="fill-gray-300"/>
            <circle cx="28" cy="36" r="1.5" className="fill-gray-300"/>
            <circle cx="32" cy="36" r="1.5" className="fill-gray-300"/>
          </svg>
        </div>

        {/* Content */}
        <div className='relative z-10 h-full flex items-center justify-center px-8 sm:px-12'>
          <div className='text-center max-w-3xl'>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-dark dark:text-light mb-4'>
              Premium Golf Equipment
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light'>
              Elevate your game with professional-grade gear
            </p>
          </div>
        </div>

      </article>
    </div>
  );
};

export default GolfBanner;

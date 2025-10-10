import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'>
            <Image src={profileCharacter} alt="GolfShop"
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Your Premier Golf Equipment Destination
            </h2>
            <p className='font-medium mt-4 text-base'>
            At GolfShop, we're passionate about golf and committed to providing golfers of all skill levels with premium equipment and accessories. From the latest drivers and irons to comfortable golf shoes and high-performance balls, we offer everything you need to elevate your game. Our carefully curated selection features top brands and innovative products designed to help you play your best golf.
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection
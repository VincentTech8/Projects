import React from 'react'
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        {/* Left Side */}
        <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
            Hello, I'm Vincent
          </h1>
          <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl w-[95%]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
        </div>
        {/* Right Side */}
        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative'>
            <Image
              src="/images/character.png"
              alt="Hero Image"
              width={150}
              height={150}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[250px] lg:h-[250px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
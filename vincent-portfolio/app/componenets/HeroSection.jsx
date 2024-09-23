import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        Hello, I'm Vincent
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                        voluptuous.
                    </p>
                    <div>
                        <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>
                            Hire me
                        </button>
                        <button className='px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>
                            Download CV
                        </button>
                    </div>
                </div>
                <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[325px] lg:h-[325px] relative'>
                        <Image
                            src="/images/character.png"
                            width={150}
                            height={150}
                            alt="Hero Image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[250px] lg:h-[250px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
                        Hello, I'm Vincent
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                        voluptuous.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-3/5 sm:w-fit rounded-full sm:mr-4 bg-white hover:bg-slate-200 text-black'>
                            Hire me
                        </button>
                        <button className='px-6 py-3 w-3/5 sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>
                            Download CV
                        </button>
                    </div>
                </div>
                <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#323131] w-[175px] h-[175px] sm:w-[225px] sm:h-[225px] lg:w-[275px] lg:h-[275px] relative'>
                        <Image
                            src="/images/character.png"
                            width={125}
                            height={125}
                            alt="Hero Image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:w-[175px] sm:h-[175px] lg:w-[225px] lg:h-[225px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
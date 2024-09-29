"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 xl:grid-cols-12'>
                <div className='col-span-8 place-self-center text-center xl:text-left justify-self-start'>
                    <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
                        <span className='bg-clip-text text-transparent' style={{ backgroundImage: "linear-gradient(to right, #96EC98, #01EEFC)" }}>
                            Hello, I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Vincent',
                                1000,
                                'a Software Engineer',
                                1000,
                                'a Web Developer',
                                1000,
                                'an UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={150}
                            repeat={Infinity}
                            className='text-2xl sm:text-3xl lg:text-4xl'
                        />
                    </h1>
                    <p className="text-[#C5C6C7] text-lg sm:text-xl lg:text-2xl mb-6 font-extrabold">
                        Ancora Imparo
                    </p>
                    <p className="text-[#C5C6C7] text-base sm:text-lg lg:text-xl mb-6">
                        "I can't change the direction of the wind, but I can adjust my sails to always reach my destination." #JimmyDean
                    </p>
                    <div>
                        <button className='px-6 py-3 w-[170px] xl:w-fit rounded-full sm:mr-4 text-black hover:opacity-80' style={{ backgroundImage: "linear-gradient(to right, #96EC98, #01EEFC)" }}>
                            Hire me
                        </button>
                        <button className='px-6 py-3 w-[170px] xl:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border mt-3' style={{ borderColor: '#01EEFC' }}>
                            Download CV
                        </button>
                    </div>
                </div>
                <div className='col-span-4 place-self-center mt-12'>
                    <div className='rounded-full bg-[#232323] w-[175px] h-[175px] sm:w-[225px] sm:h-[225px] lg:w-[275px] lg:h-[275px] relative'>
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

export default HeroSection;
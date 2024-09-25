import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
                        <span className='text-transparent bg-clip-text' style={{ backgroundImage: "linear-gradient(to right, #96EC98, #01EEFC)" }}>
                            Hello, I'm{" "}
                        </span>
                        Vincent
                    </h1>
                    <p className="text-[#C5C6C7] text-base sm:text-lg lg:text-xl mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                        voluptuous.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-3/5 sm:w-fit rounded-full sm:mr-4  text-black hover:opacity-80' style={{ backgroundImage: "linear-gradient(to right, #96EC98, #01EEFC)" }}>
                            Hire me
                        </button>
                        <button className='px-6 py-3 w-3/5 sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border mt-3' style={{ borderColor: '#01EEFC' }}>
                            Download CV
                        </button>
                    </div>
                </div>
                <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
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

export default HeroSection
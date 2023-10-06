import React from 'react'
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
        <section id='about' className='flex flex-col py-14 px-8 sm:px-20 justify-center'>
            <h1 className="text-center uppercase text-foreground text-lg md:text-xl lg:text-2xl font-medium">
                Changing the way we remember
            </h1>
            <div className="flex flex-col lg:flex-row">

                <div className="flex flex-col justify-start lg:justify-center pt-4 lg:pt-14 gap-8 w-[full] lg:w-[50%] lg:h-[100vh] relative lg:sticky top-0">
                <h1 className='text-yellow-300 text-3xl sm:text-7xl font-semibold text-center lg:text-start'>
                    Reminiscing loved ones
                </h1>
                <h3 className='text-lg text-foreground lg:text-2xl'>
                    Preserve, present & celebrate loved ones stories. The Foreversake app is the 
                    place where family and friends connect and collaborate on filling in information, 
                    sharing media, storing memories and interacting with all the available content, 
                    including saving things out of the app for backing up elsewhere. 
                </h3>
                </div>

                <div className="scroll py-24 lg:py-0">
                <div className='lg:h-[40vh] lg:pt-[100px] gap-6 pl-0 lg:pl-40 pr-4 lg:pr-24'>
                    <Image
                    src="/photo-1.jpeg"
                    width={500}
                    height={500}
                    className='m-2 rotate-[-10deg]'
                    alt="Picture of the author"
                    />
                </div>

                <div className='lg:h-[35vh] lg:pt-[30px] gap-6 pl-0 lg:pl-40 pr-4 lg:pr-24'>
                    <Image
                    src="/photo-2.jpeg"
                    width={500}
                    height={500}
                    className='m-2 rotate-[10deg]'
                    alt="Picture of the author"
                    />
                </div>

                <div className='lg:h-[35vh] lg:pt-[30px] gap-6 pl-0 lg:pl-40 pr-4 lg:pr-24'>
                    <Image
                    src="/photo-3.jpeg"
                    width={500}
                    height={500}
                    className='m-2 rotate-[-4deg]'
                    alt="Picture of the author"
                    />
                </div>

                <div className='lg:h-[35vh] lg:pt-[30px] gap-6 pl-0 lg:pl-40 pr-4 lg:pr-24'>
                    <Image
                    src="/photo-4.jpg"
                    width={500}
                    height={500}
                    className='m-2 rotate-[6deg]'
                    alt="Picture of the author"
                    />
                </div>

                </div>
            
            </div>
        </section>
      )
}
import React from 'react'

type Props = {number: number}

const Pointer = ({number}: Props) => {
    return(
      <div className="flex flex-col items-center mr-4">
        <div>
          <div className="flex items-center justify-center w-10 h-10 border border-foreground rounded-full text-yellow-300">
            {number}
          </div>
        </div>
        <div className="w-px h-full bg-yellow-300" />
      </div>
    )
  }
  

export default function How() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      
        <h1 className="text-center uppercase text-white text-lg md:text-xl lg:text-2xl font-medium">
        How Foreversake Works
        </h1>

        <div className="grid gap-20 lg:gap-6 row-gap-10 lg:grid-cols-2 pt-10 lg:pt-20">
        <div className="lg:py-6 lg:pr-16 text-foreground">
            <div className="flex">
            <Pointer number={1} />
            <div className="pt-1 pb-8">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            </div>
            <div className="flex">
            <Pointer number={2} />
            <div className="pt-1 pb-8">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            </div>
            <div className="flex">
            <Pointer number={3} />
            <div className="pt-1 pb-8">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            </div>
            <div className="flex">
            <Pointer number={4} />
            <div className="pt-1 pb-8">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            </div>
            <div className="flex">
            <Pointer number={5} />
            <div className="pt-1">
                <p className="mb-2 text-lg font-bold">Success</p>
                <p />
            </div>
            </div>
        </div>
        <div className="relative">
            <img
            className="inset-0 object-cover object-bottom w-full rounded-3xl shadow-lg h-96 lg:absolute lg:h-full"
            src="how.jpg"
            alt=""
            />
        </div>
        </div>
    </div>
  )
}
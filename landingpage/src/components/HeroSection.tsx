import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
  titleClassName?: string;
}

const HeroSection = ({ className, titleClassName }: Props) => {
  const data = [
    {
      image: '/check.webp',
      title: 'create account',
    },
    {
      image: '/check.webp',
      title: 'Login ',
    },
    {
      image: '/check.webp',
      title: 'contact us',
    },
  ];
  return (
    <div
      className={`w-full bg-[#092C4C] bg-opacity-90 min-h-[595px] px-6 md:px-10 py-6 sm:py-8 lg:py-12 flex flex-col justify-center items-center relative overflow-hidden ${className}`}
    >
      <img
        src="/herosecimage.webp"
        alt="Background"
        width={0}
        height={0}
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '140%',
          height: '140%',
          zIndex: -1,
          objectFit: 'cover',
        }}
        className=""
      />
      <img
        src="/heroorange.webp"
        alt=""
        width={50}
        height={50}
        className="absolute top-1 sm:top-2 right-1 sm:right-3"
      />
      <img
        src="/herowhite.webp"
        alt=""
        width={50}
        height={50}
        className="absolute bottom-1 sm:bottom-3 left-1 sm:left-3"
      />
      <div className="text-center">
        <h1
          className={`text-white text-2xl md:text-3xl lg:text-4xl font-bold font-NotoSans leading-tight md:leading-snug ${titleClassName}`}
        >
          Create Your Account and Contact Us Directly
        </h1>
        <p className="text-sm md:text-base lg:text-lg mt-2 font-OpenSans leading-6 text-white">
          Follow the following steps to contact us
        </p>
      </div>
      <div className="w-full sm:w-3/4 lg:w-1/2 mt-6 sm:mt-8 lg:mt-10 flex  items-center justify-between">
        {data?.map((e, index) => (
          <div key={index} className="flex gap-1 items-center mt-4 sm:mt-6">
            <span className="bg-white w-6 h-6 md:w-9 md:h-9 rounded-full flex justify-center items-center">
              <img src={e.image} alt="" width={16} height={11} />
            </span>
            <p className="text-white text-sm md:text-base md:text-xl font-NotoSans font-bold">
              {e.title}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 sm:mt-10 lg:mt-12">
        <Link href="/">
          <button
            className="bg-blue-500 text-white hover:bg-blue-700 rounded-lg px-4 py-2 text-base md:text-lg lg:text-xl font-OpenSans leading-6 cursor-pointer whitespace-nowrap"
            type="button"
          >
            Create Account - It's Free!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

import React from 'react'
import Navbar from './component/Navbar'
import Image from 'next/image'
import Hero from '../public/Hero.png'
import Group from '../public/Group 1000002057.png'
import AboutImage1 from '../public/about-image-1.png'
import AboutImage2 from '../public/about-image-2.png'
import AboutImage3 from '../public/about-image-3.png'
import TickIcon from '../public/tick-icon.png'
import Food1 from '../public/food1.png'
import Food2 from '../public/food2.png'
import Food3 from '../public/food3.png'
import Food4 from '../public/food4.png'
import Chef1 from '../public/Chef 1.png'
import Chef2 from '../public/Chef 2.png'
import Chef3 from '../public/Chef 3.png'
import Chef4 from '../public/Chef 4.png'
import Link from 'next/link'




export default function page() {
  return (
    <div>
      <Navbar />
      <div >
        <div className='flex justify-between items-center flex-col md:flex-row mt-10 text-center lg:text-left'>
          <div>
            <Image src={Group} alt="image" className='lg:mx-4 xl:mx-[50px] 2xl:ml-[242px] hidden xl:inline-block' />
          </div>

          <div className='2xl:w-[472px] h-[356px] mx-5 md:mx-0 lg:ml-[48px] 2xl:ml-[18px]'>
            <h2 className='font-greatVibes text-primary font-normal leading-10 text-[30px] 2xl:text-[32px]'> Its Quick & Amusing! </h2>
            <h1 className='text-white font-bold text-[55px] xl:text-[60px] leading-[68px] w-[400px] lg:w-[478px] 2xl:w-[472px] h-[136px]'> <span className='text-primary'>Th</span>e Art of speed food Quality</h1>
            <p className='text-white lg:text-[14px] 2xl:text-[16px] mx-6 lg:mx-0 md:w-[350px] lg:w-[418px] h-[48px] leading-6 mt-20 lg:mt-6 font-normal font-sans 2xl:leading-[24px] 2xl:mt-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
            <Link href={'/Menu'}>
              <button className='text-[16px] font-normal leading-6 font-sans text-white bg-primary rounded-[30px] w-[190px] h-[60px] mt-14 lg:mt-8'> See Menu </button>
            </Link>
          </div>

          <div className=' md:mr-[48px] 2xl:mr-[200px] lg:w-[720px] lg:h-[513px] 2xl:w-[877.8px] 2xl:h-[670px] 2xl:ml-[120px] mt-20'>
            <Image src={Hero} alt="HeroImage" />
          </div>

        </div>
      </div>

      <div className='flex justify-between items-center flex-col md:flex-row text-center md:text-left xl:mx-[150px] 2xl:mx-[300px] mt-24 md:mt-40 lg:mt-5 xl:gap-9 xl:mt-10'>
        <div className='lg:ml-[48px] md:ml-10'>
          <h2 className='font-greatVibes text-primary font-normal leading-10 text-[30px] 2xl:text-[32px]'> About Us </h2>
          <h1 className='text-white font-bold  text-[32px] sm:text-[40px] md:text-[48px] leading-[40px] sm:leading-[48px] md:leading-[56px] md:w-[374px] lg:w-[446px] h-[110px]'> <span className='text-primary'>We</span> Create the best foody product </h1>
          <p className='text-white lg:text-[14px] 2xl:text-[16px] mx-6 md:mx-0 md:w-[320px] lg:w-[420px] lg:h-[124px] 2xl:w-[526px] 2xl:h-[130px] leading-6 sm:mt-20 lg:mt-6 font-normal font-sans 2xl:leading-[24px] 2xl:mt-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat. </p>

          <div className='flex gap-2 2xl:gap-4 mt-6 ml-4 md:ml-0 items-center'>
            <Image src={TickIcon} alt="tickicon" className='w-[17px] h-[12.24px]' />
            <p className='text-white leading-[26px]'>  Lacus nisi, et ac dapibus sit eu velit in consequat. </p>
          </div>
          <div className='flex gap-2 2xl:gap-4 mt-4 ml-4 md:ml-0  items-center'>
            <Image src={TickIcon} alt="tickicon" className='w-[17px] h-[12.24px]' />
            <p className='text-white leading-[26px]'> Quisque diam pellentesque bibendum non dui volutpat fringilla. </p>
          </div>
          <div className='flex gap-2 2xl:gap-4 mt-4 ml-4 md:ml-0  items-center'>
            <Image src={TickIcon} alt="tickicon" className='w-[17px] h-[12.24px]' />
            <p className='text-white leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>

          <button className='text-[16px] font-normal leading-6 font-sans text-white bg-primary rounded-[30px] w-[190px] h-[60px] mt-10 lg:mt-8'>Read More</button>
        </div>

        <div className='md:mr-[48px] xl:mr-[10px] 2xl:ml-40 mt-10'>
          <Image src={AboutImage1} alt="aboutimage" className='lg:w-[322px] xl:w-[600px] xl:h-[270px] 2xl:w-[660px] 2xl:h-[330px]rounded-[6px] mr-5' />
          <div className='flex justify-between items-center mt-[12px] flex-col gap-3 xl:gap-0 xl:flex-row'>
            <Image src={AboutImage2} alt="aboutimage" className='xl:w-[295px] 2xl:w-[320px] 2xl:h-[155px] rounded-[6px] mr-5' />
            <Image src={AboutImage3} alt="aboutimage" className=' xl:w-[295px]  2xl:w-[320px] 2xl:h-[155px] rounded-[6px] mr-5' />
          </div>
        </div>
      </div>

      <div className='mt-24 md:mt-40 xl:ml-[48px] px-4 sm:px-8 lg:px-16'>
        <h2 className='font-greatVibes text-primary font-normal leading-10 text-[30px] sm:text-[32px] text-center'>Food Category</h2>
        <h1 className='text-white font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[40px] sm:leading-[48px] md:leading-[56px] text-center'>
          <span className='text-primary'>Ch</span>oose Food Item
        </h1>
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 xl:mx-[100px]'>
          <div className='relative w-full max-w-[306px]'>
            <Image
              src={Food1}
              alt='foodimage'
              width={306}
              height={329}
              className='rounded-lg w-full h-auto'
            />
            <div className='absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold'>
              Save 20%
            </div>
            <p className='absolute bottom-4 left-4 text-white font-bold'>
              Fast Food Dish
            </p>
          </div>
          <Image
            src={Food2}
            alt='foodimage'
            width={306}
            height={329}
            className='rounded-lg w-full max-w-[306px] h-auto'
          />
          <Image
            src={Food3}
            alt='foodimage'
            width={306}
            height={329}
            className='rounded-lg w-full max-w-[306px] h-auto'
          />
          <Image
            src={Food4}
            alt='foodimage'
            width={306}
            height={329}
            className='rounded-lg w-full max-w-[306px] h-auto'
          />
        </div>
      </div>


      <section className=" text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className='font-greatVibes text-primary font-normal leading-10 text-[30px] 2xl:text-[32px] text-center'> Chefs </h2>
          <h1 className='text-white font-bold  text-[32px] sm:text-[40px] md:text-[48px] leading-[40px] sm:leading-[48px] md:leading-[56px] text-center'><span className='text-primary'>Me</span>et Our Chef</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-md overflow-hidden shadow-lg">
            <Image src={Chef1} alt="D. Estwood" width={400} height={400} className="w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">M. Mohammad</h3>
              <p className="text-gray-400 text-sm">Chief Chef</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-md overflow-hidden shadow-lg">
            <Image src={Chef2} alt="D. Scoriesh" width={400} height={400} className="w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Jorina Begum</h3>
              <p className="text-gray-400 text-sm">Assistant Chef</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-md overflow-hidden shadow-lg">
            <Image src={Chef3} alt="M. William" width={400} height={400} className="w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Bisnu Devgon</h3>
              <p className="text-gray-400 text-sm">Advertising Chef</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-md overflow-hidden shadow-lg">
            <Image src={Chef4} alt="W. Readfroad" width={400} height={400} className="w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">Tahmina Rumi</h3>
              <p className="text-gray-400 text-sm">Chef</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link href={'/Chefs'}>
            <button className="border border-primary hover:bg-primary text-white px-6 py-2 rounded-full transition">See More
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

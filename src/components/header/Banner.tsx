import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import c1 from '@/components/images/slider/sliderImg_1.jpg';
import c2 from '@/components/images/slider/sliderImg_2.jpg';
import c3 from '@/components/images/slider/sliderImg_3.jpg';
import c4 from '@/components/images/slider/sliderImg_4.jpg';

const Banner = () => {
  return (
    <div className=' relative'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image priority src={c1} alt="slider1" />
        </div>
        <div>
          <Image src={c2} alt="slider2" />
        </div>
        <div>
          <Image src={c3} alt="slider3" />
        </div>
      </Carousel>
        <div className=' w-full h-30 bg-gradient-to-t from-gray-1000 to-transparent absolute bottom-0 z-20'></div>
    </div>
  );
};

export default Banner;

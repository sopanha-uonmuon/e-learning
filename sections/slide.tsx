'use client'
import React from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import slide_1 from '../assets/images'
import slide_2 from '../assets/images'
import slide_3 from '../assets/images'

const Slide = () => {
	const plugin = React.useRef(
		Autoplay({ delay: 5000, stopOnInteraction: true })
	  )
  return (
	<div className='w-full h-auto'>
		<Carousel 
			plugins={[plugin.current]}
			opts={{
				align: "start",
			}}
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}>
			
			<CarouselContent>
				<CarouselItem className='flex justify-center'>
					<Image src={slide_1.slide_1.src} alt='slide-1' width={960} height={0}></Image>
				</CarouselItem>
				<CarouselItem  className='flex justify-center'>
					<Image src={slide_2.slide_2.src} alt='slide-1' width={960} height={0}></Image>
				</CarouselItem>
				<CarouselItem  className='flex justify-center'>
					<Image src={slide_3.slide_3.src} alt='slide-1' width={960} height={0}></Image>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	</div>
  )
}

export default Slide
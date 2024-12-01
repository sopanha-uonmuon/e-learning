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
				<CarouselItem><div className='relative w-full h-3/6'>Box_1</div></CarouselItem>
				<CarouselItem>Box_2</CarouselItem>
				<CarouselItem>Box_3</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	</div>
  )
}

export default Slide
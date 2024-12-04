'use client'
import React from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

import Image from 'next/image'

type newCourseValue = {
	thumbnail: string,
	title:string,
	details: string
}

const Slide = ({imgAst}:{imgAst:newCourseValue[]}) => {
  return (
	<div className='w-full h-full'>
		<Carousel 
		opts={{
			align: "start",
		}}
		className="w-full h-full">
			<CarouselContent>
					{imgAst.map((data, index) => (
					<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
						<div className="p-1">
							<Image src={data.thumbnail} alt='slide-1' width={960} height={0}></Image>
						</div>
						<p>{data.title}</p>
						<p>{data.details}</p>
					</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
		</Carousel>
	</div>
  )
}

export default Slide
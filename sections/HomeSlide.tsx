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
import { Button } from '@/components/ui/button'

type newCourseValue = {
	thumbnail: string,
	title:string,
	details: string
}

const HomeSlide = ({imgAst}:{imgAst:newCourseValue[]}) => {
  return (
	<div className='w-full h-full'>
		<Carousel 
		opts={{
			align: "start",
		}}>
			<CarouselContent className='gap-6'>
					{imgAst.map((data, index) => (
					<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 shadow-md hover:shadow-xl rounded-lg">
						<div className="p-1">
							<Image className='rounded-lg' src={data.thumbnail} alt='slide-1' width={960} height={0}></Image>
						</div>
						<p className='font-bold my-4'>{data.title}</p>
						<p className='text-ellipsis overflow-hidden whitespace-pre-line h-[70px]'>{data.details}</p>
						<div className='mt-4'>
							<Button onClick={()=>{alert('Add to Collection: ' + data.title)}}>Add to collection</Button>
						</div>
					</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
		</Carousel>
	</div>
  )
}

export default HomeSlide
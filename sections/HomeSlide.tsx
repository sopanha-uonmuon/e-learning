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
	<div className='w-full h-full flex justify-center'>
		<Carousel 
		opts={{
			align: "start",
		}}
		className='h-[600px] w-11/12'>
			<CarouselContent className='gap-2 h-[600px] w-11/12'>
					{imgAst.map((data, index) => (
					<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
						<div className='w-11/12 h-[500px] flex flex-col margin-center shadow-md hover:shadow-xl rounded-lg'>
							<div className="p-1">
								<Image className='rounded-lg' src={data.thumbnail} alt='slide-1' width={960} height={0}></Image>
							</div>
							<p className='font-bold my-4 ml-4'>{data.title}</p>
							<p className='text-ellipsis overflow-hidden whitespace-pre-line h-[70px] ml-4'>{data.details}</p>
							<div className='mt-4 ml-4'>
								<Button onClick={()=>{alert('Add to Collection: ' + data.title)}}>Add to collection</Button>
							</div>
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
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
	<div className='w-full section-h flex justify-center'>
		<Carousel 
		opts={{
			align: "start",
		}}
		className='section-h w-11/12'>
			<CarouselContent className='sm:gap-2 section-h w-11/12 max-[375px]:w-3/4'>
					{imgAst.map((data, index) => (
					<CarouselItem key={index} className="">
						<div className='w-11/12 h-[500px] max-[375px]:h-[250px] flex flex-col sm:margin-center shadow-md hover:shadow-xl rounded-lg'>
							<div className="p-1">
								<Image className='rounded-lg' src={data.thumbnail} alt='slide-1' width={960} height={0}></Image>
							</div>
							<p className='font-bold my-4 max-[375px]:my-1 ml-4 max-[375px]:ml-1 max-[375px]:text-sm'>{data.title}</p>
							<p className='text-ellipsis overflow-hidden whitespace-pre-line flex-1 ml-4 max-[375px]:ml-1 max-[375px]:text-xs '>{data.details}</p>
							<div className='h-[50px] pl-3 max-[375px]:pl-0 max-[375px]:h-[30px] max-[375px]:mx-auto max-[375px]:my-2'>
								<Button className='max-[375px]:h-[30px] max-[375px]:text-xs' onClick={()=>{alert('Add to Collection: ' + data.title)}}>Add to collection</Button>
							</div>
						</div>
						
					</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='max-[375px]:-left-9'/>
				<CarouselNext className='max-[375px]:w-4 max-[375px]:h-4'/>
		</Carousel>
	</div>
  )
}

export default HomeSlide
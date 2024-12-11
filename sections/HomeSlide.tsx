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
		className='section-h w-11/12 max-sm:w-full'>
			<CarouselContent className='sm:gap-2 section-h w-11/12 max-sm:w-[48%]'>
					{imgAst.map((data, index) => (
					<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">

						<div className='w-11/12 max-sm:w-full h-[500px] max-sm:h-[250px] flex flex-col sm:margin-center shadow-md hover:shadow-xl rounded-lg'>

							<div className="p-1">
								<Image className='rounded-lg' src={data.thumbnail} alt='slide-1' width={960} height={0}></Image>
							</div>
							<p className='font-bold my-4 max-sm:my-1 ml-4 max-sm:ml-1 max-sm:px-1 max-sm:text-[9px]'>{data.title}</p>
							<p className='text-ellipsis overflow-hidden whitespace-pre-line flex-1 ml-4 max-sm:ml-1 max-sm:px-1 max-sm:text-[8px] '>{data.details}</p>
							<div className='h-[50px] pl-3 max-sm:pl-0 max-sm:h-[30px] max-sm:mx-auto max-sm:my-2 margin-center'>
								<Button className='max-sm:h-[30px] max-sm:text-[9px] siemreap max-sm:px-[40px] px-[70px]' onClick={()=>{alert('Add to Collection: ' + data.title)}}>ចូលមើល</Button>
							</div>
						</div>
					</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='max-sm:left-0'/>
				<CarouselNext className='max-sm:right-0'/>
		</Carousel>
	</div>
  )
}

export default HomeSlide
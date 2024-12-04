'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import assetImg from '../assets/images'
const Hero = () => {
	return (
		<div className='h-full flex justify-center items-center gap-8 mx-10'>
			<div className='flex flex-col justify-center flex-1'>
				{/* <Image className="w-full" src={assetImg.hero.src} alt='hero' width={960} height={546}/> */}
				<div>
					<p className='text-8xl font-semibold'>Online</p>
					<p className='text-8xl font-semibold'>Learning</p>
				</div>
				<div className='mt-11'>
					<div><p className='text-[#7691a4]'>Expert teaching consultant anytime, anywhere</p></div>
					<div><p className='text-[#7691a4]'>Access top tier course from the comfort of your home or on the go.</p></div>
					<div><p className='text-[#7691a4]'>Our platform connect you with experienced professionals around the clock.</p></div>
				</div>
			 
				<Button className='w-[160px] h-[50px] mt-10 rounded-3xl text-lg hover:bg-[#204765]' onClick={()=>{alert('Register')}}>Register</Button>
			</div>
			<Image src={assetImg.hero.src} alt='hero' width={600} height={400}/>
		</div>
		
	)
}

export default Hero
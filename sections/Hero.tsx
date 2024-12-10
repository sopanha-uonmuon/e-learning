'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import assetImg from '../assets/images'
const Hero = () => {
	return (
		<div className='h-full flex justify-evenly items-center gap-8 mx-10 max-sm:flex-col'>
			<div className='flex flex-col justify-center items-center'>
				<div className='watphnom_bold flex flex-col h-[250px] max-sm:h-[104px] gap-14 max-sm:gap-6 items-center'>
					<p className='text-8xl max-sm:text-4xl font-semibold'>ការរៀនតាម</p>
					<p className='text-8xl max-sm:text-4xl font-semibold'>អ៊ីនធឺណិត</p>
				</div>
				<div className='mt-11 small_text_color freehand leading-9 max-sm:leading-[20px] text-sm max-sm:text-[10px] text-center'>
					<div><p>អ្នកប្រឹក្សាជំនាញបង្រៀនគ្រប់ពេលវេលា គ្រប់ទីកន្លែង</p></div>
					<div><p>ចូលប្រើវគ្គសិក្សាលំដាប់កំពូលពីភាពងាយស្រួលនៃផ្ទះរបស់អ្នក ឬនៅពេលធ្វើដំណើរ</p></div>
					<div><p>វេទិការបស់យើងភ្ជាប់អ្នកជាមួយអ្នកជំនាញដែលមានបទពិសោធន៍គ្រប់ពេលវេលា។</p></div>
				</div>
				<Button className='w-[160px] max-sm:w-[100px] h-[50px] max-sm:h-[40px] mt-10 rounded-3xl text-lg max-sm:text-sm hover:btn_hover siemreap' onClick={()=>{alert('Register')}}>ចុះឈ្មោះ</Button>
			</div>
			<Image className='max-sm:hidden' src={assetImg.hero.src} alt='hero' width={650} height={450}/>
		</div>
		
	)
}

export default Hero
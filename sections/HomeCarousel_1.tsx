import React from 'react'
import {newCourseData} from '../constants'
import HomeSlide from './HomeSlide'
import Link from 'next/link'

const HomeCarousel_1 = () => {
  return (
    <div className='w-full section-h flex flex-col justify-start gap-5'>
        <div className='flex justify-between'>
            <h1 className='text-xl font-bold ml-20 self-start'>វគ្គសិស្សាថ្មី</h1>
            <Link href={'/new_course'}>
            <p className='text-l font-extralight mr-20'>មើលបន្ថែម</p>
            </Link>
           
        </div>
        <div className='w-full flex-1'>
            <HomeSlide imgAst={newCourseData}/>
        </div>
    </div>
    
  )
}

export default HomeCarousel_1
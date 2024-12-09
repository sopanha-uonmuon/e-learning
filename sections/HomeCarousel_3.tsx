import React from 'react'
import {newCourseData} from '../constants'
import HomeSlide from './HomeSlide'
import Link from 'next/link'

const HomeCarousel_3 = () => {
  return (
    <div className='w-full section-h flex flex-col justify-start gap-5'>
        <div className='flex justify-between khmerfont'>
            <h1 className='text-xl font-bold ml-20 self-start'>វគ្គសិស្សាតាមប្រភេទ</h1>

            <Link href={'/by_categories'}>
              <p className='text-l font-extralight mr-20'>មើលបន្ថែម</p>
            </Link>
           
        </div>
        <div className='w-full h-[500px]'>
            <HomeSlide imgAst={newCourseData}/>
        </div>
    </div>
    
  )
}

export default HomeCarousel_3
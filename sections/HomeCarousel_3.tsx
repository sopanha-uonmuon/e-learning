import React from 'react'
import {newCourseData} from '../constants'
import HomeSlide from './HomeSlide'
import Link from 'next/link'

const HomeCarousel_3 = () => {
  return (


<div className='w-full max-sm:w-[75%] section-h flex flex-col justify-start gap-5 max-sm:margin-center'>
<div className='flex justify-between siemreap'>
    <h1 className='text-xl max-sm:text-base font-bold sm:ml-20 self-start'>វគ្គសិស្សាតាមប្រភេទ</h1>
    <Link className='text-l max-sm:text-sm font-extralight sm:mr-20 underline' href={'/new_course'}>
      <p>មើលបន្ថែម</p>
    </Link>
   
</div>
<div className='w-full flex-1'>
    <HomeSlide imgAst={newCourseData}/>
</div>
</div>
    
  )
}

export default HomeCarousel_3
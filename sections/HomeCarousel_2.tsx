import React from 'react'
import {newCourseData} from '../constants'
import HomeSlide from './HomeSlide'
import Link from 'next/link'

const HomeCarousel_2 = () => {
  return (


<div className='w-full max-[375px]:w-[75%] section-h flex flex-col justify-start gap-5 max-[375px]:margin-center'>
<div className='flex justify-between siemreap'>
    <h1 className='text-xl max-[375px]:text-base font-bold sm:ml-20 self-start'>វគ្គសិស្សាតាមនាយកដ្ធាន</h1>
    <Link className='text-l max-[375px]:text-sm font-extralight sm:mr-20 underline' href={'/new_course'}>
      <p>មើលបន្ថែម</p>
    </Link>
   
</div>
<div className='w-full flex-1'>
    <HomeSlide imgAst={newCourseData}/>
</div>
</div>
    
  )
}

export default HomeCarousel_2
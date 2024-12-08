import React from 'react'
import {newCourseData} from '../constants'
import HomeSlide from './HomeSlide'

const HomeCarousel_1 = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start items-center gap-5'>
        <div className='self-start ml-14'>
            <h1 className='text-xl font-bold'>វគ្គសិស្សាថ្មី</h1>
        </div>
        <div className='w-full h-full'>
            <HomeSlide imgAst={newCourseData}/>
        </div>
    </div>
    
  )
}

export default HomeCarousel_1
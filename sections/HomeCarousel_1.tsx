import React from 'react'
import Slide from './slide'
import {newCourseData} from '../constants'

const HomeCarousel_1 = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
        <div className='self-start ml-8'>
            <h1 className='text-xl font-bold'>វគ្គសិស្សាថ្មី</h1>
        </div>
        <div className='w-11/12'>
            <Slide imgAst={newCourseData}/>
        </div>
    </div>
    
  )
}

export default HomeCarousel_1
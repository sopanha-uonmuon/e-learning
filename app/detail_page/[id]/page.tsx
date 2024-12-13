'use client'
import React from 'react'
import {newCourseData} from '../../../constants'
import { Button } from '@/components/ui/button'

type BookId = {
  params: Promise<{id: number}>
}

const DetailPage = async ({params}:BookId) => {
  const id = (await params).id
  console.log(id)
  return (
    <div>
    <div className='desktop_main w-full h-screen flex flex-col justify-center items-center bg-white gap-5 siemreap'>
       <div className='ml-[120px] text-xl siemreap mt-[50px] font-semibold underline underline-offset-4'>{newCourseData[id].title}</div>
       <iframe width="932" height="630"
        src={newCourseData[id].url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        <div className='w-full h-auto flex justify-center items-center gap-16'>
          <div className='w-[650px] h-80 flex flex-col justify-center items-start border-2 pl-6 gap-3 rounded-xl border-cyan-700'>
              <p>អ្នកផលិត: {newCourseData[id].book_details.name}</p>
              <p>ថ្ថៃបង្ហោះ: {newCourseData[id].book_details.createdDate}</p>
              <p>រយះពេល: {newCourseData[id].book_details.times}</p>
              <p>វីដេអូ: {newCourseData[id].book_details.amountVideos}, ការអាន: {newCourseData[id].book_details.amountDocs}, Quizz:{newCourseData[id].book_details.quizzes}</p>
              <p>ភាសា: {newCourseData[id].book_details.Language}</p>
          </div>
          <Button className='w-[200px] h-[50px] rounded-md text-lg hover:btn_hover siemreap' onClick={()=>{alert('Register')}}>ចុះឈ្មោះ</Button>
        </div>
      
       
    </div>
    <div className='h-[350px] bg-white relative w-11/12 desktop_main flex items-center'>
      <div className='h-[300px] flex flex-col gap-5 content-evenly items-center'>
        <div className='w-full border-t-2 border-gray-300 bg-white'></div>
        <div className='w-3/4 siemreap'>{newCourseData[id].details}</div> 
      </div>
        
    </div>
    </div>
  )
}

export default DetailPage
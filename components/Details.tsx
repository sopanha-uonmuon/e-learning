'use client'
import React from 'react'
import { Button } from './ui/button'
type newCourseValue = {
	id:number,
	thumbnail: string,
    url: string,
	title:string,
	details: string
    book_details: {
        name: string,
        createdDate: string,
        times: string,
        amountVideos: number,
        amountDocs: number,
        quizzes: number,
        language: string
    }
}
const BookDetails = ({bookData, id}:{bookData:newCourseValue[], id:number}) => {
  return (
    <div>
        <div className='sm:desktop_main w-full sm:h-screen max-sm:h-[595px] flex flex-col justify-center items-center bg-white gap-5 siemreap'>
       <div className='sm:ml-[120px] sm:text-xl siemreap sm:mt-[50px] font-semibold underline underline-offset-4 max-sm:w-3/4 max-sm:text-xs max-sm:text-center max-sm:leading-6'>{bookData[id].title}</div>
       <iframe width="932" height="630" className='max-sm:w-full max-sm:p-3 max-sm:h-[250px]'
        src={bookData[id].url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        <div className='w-full h-auto flex justify-center items-center gap-16 max-sm:gap-4 max-sm:flex-col'>
          <div className='w-[650px] h-80 max-sm:h-[165px] flex flex-col justify-center items-start border-2 pl-6 gap-3 rounded-xl border-cyan-700 max-sm:w-11/12 max-sm:text-xs'>
              <p>អ្នកផលិត: {bookData[id].book_details.name}</p>
              <p>ថ្ថៃបង្ហោះ: {bookData[id].book_details.createdDate}</p>
              <p>រយះពេល: {bookData[id].book_details.times}</p>
              <p>វីដេអូ: {bookData[id].book_details.amountVideos}, ការអាន: {bookData[id].book_details.amountDocs}, Quizz:{bookData[id].book_details.quizzes}</p>
              <p>ភាសា: {bookData[id].book_details.language}</p>
          </div>
          <Button className='w-[200px] h-[50px] max-sm:w-[160px] max-sm:h-[40px] rounded-md text-lg max-sm:text-sm hover:btn_hover siemreap' onClick={()=>{alert('Register')}}>ចុះឈ្មោះ</Button>
        </div>
    </div>
    <div className='h-auto bg-white relative max-sm:w-full w-11/12 sm:desktop_main flex items-center'>
      <div className='h-[500px] flex flex-col gap-5 content-evenly items-center'>
        <div className='w-full border-t-2 border-gray-300 bg-white'></div>
        <div className='w-3/4 siemreap max-sm:text-sm max-sm:leading-7'>{bookData[id].details}</div> 
      </div>
        
    </div>
    </div>
  )
}

export default BookDetails
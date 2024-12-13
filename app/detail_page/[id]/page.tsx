import React from 'react'

const DetailPage = () => {
  return (
    <div>
    <div className='desktop_main w-full h-screen flex flex-col justify-center items-center bg-white gap-5'>
       <div className='self-start ml-[120px] text-xl siemreap mt-[50px]'>កម្មវិធីដាំស្ពៃ</div>
       <iframe width="1000" height="630" 
    src="https://www.youtube.com/embed/P2mBPZ1DYxs?si=Whhl3qJAVoLHf6Wq" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

       <div className='w-[400px] h-80 self-start ml-[120px] flex flex-col justify-center items-start border-2 pl-6 gap-3 rounded-xl border-cyan-700'>
        
            <p>អ្នកផលិត: នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <p>ថ្ថៃបង្ហោះ: 07/10/2024</p>
            <p>រយះពេល: 4ម៉ោង ៣០នាទី</p>
            <p>វីដេអូ: ការអាន: 5, Quizz:5</p>
            <p>ភាសា: ខ្មែរ</p>
       </div>
       
    </div>
    <div className='h-[600px] bg-white relative w-11/12 desktop_main'>
        <div className='absolute w-full border-t-2 border-gray-300 bg-white top-[50px]'></div>
    </div>
    </div>
  )
}

export default DetailPage
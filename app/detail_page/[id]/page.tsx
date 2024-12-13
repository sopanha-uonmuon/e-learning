import React from 'react'
import {newCourseData} from '../../../constants'
import BookDetails from '@/components/Details'

type BookId = {
  params: Promise<{id: number}>
}

const DetailPage = async ({params}:BookId) => {
  const id = (await params).id
  return (
    <div>
      <BookDetails bookData={newCourseData} id={id}/>
    </div>
  )
}

export default DetailPage
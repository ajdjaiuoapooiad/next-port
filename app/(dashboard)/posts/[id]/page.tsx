import Sidebar from '@/components/Sidebar'
import prisma from '@/utils/db'
import { JobType } from '@/utils/type'
import React, { useEffect } from 'react'

const DetailPage = async ({ params }: { params: { id: number } }) => {


    const post = await prisma.jobs.findUnique({
        where: {
            id: Number(params.id),  
        },
    })
    if(post === null){
        return <div>Post not found</div>   
    }

  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'> 
        <Sidebar />
      </div>

      <div className='col-span-4'>
        <h1>Detail Page</h1>
        {/* Add content here */}
              <div key={post.id} className='border p-4 my-4 mx-3 col-span-1 hover:shadow-xl'>
                <h1 className='font-bold'>{post.title}</h1>
                <p>Status:{post.description}</p>
              </div>
      </div>
    </div>
  )
}

export default DetailPage
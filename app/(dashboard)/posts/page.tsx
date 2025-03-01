import Sidebar from '@/components/Sidebar'
import prisma from '@/utils/db'
import React from 'react'

const PostsList = async () => {

  const jobs = await prisma.jobs.findMany()
  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'> 
        <Sidebar />
      </div>

      <div className='col-span-4'>

      <h1>Posts List</h1>
        <div className='grid grid-cols-3 '>
          {jobs.map((post) => {
            return (
              <div key={post.id} className='border p-4 my-4 mx-3 col-span-1 hover:shadow-xl'>
                <h1 className='font-bold'>{post.title}</h1>
                <p>Status:{post.description}</p>
              </div>
            )
          })}
          
        </div>

      </div>
    </div>
  )
}

export default PostsList
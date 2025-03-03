import Sidebar from '@/components/Sidebar'
import getAllData from '@/utils/actions'
import prisma from '@/utils/db'
import { JobType } from '@/utils/type'
import React from 'react'

const PostsList = async () => {

  const jobs = await getAllData()
  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'> 
        <Sidebar />
      </div>

      <div className='col-span-4'>

      <h1>Posts List</h1>
        <div className='grid grid-cols-3 '>
          {jobs.map((post: JobType) => {
            return (
              <a key={post.id} href={`/posts/${post.id}`}>
                <div  className='border p-4 my-4 mx-3 col-span-1 hover:shadow-xl'>
                  <h1 className='font-bold'>{post.title}</h1>
                  <p>Status:{post.description}</p>
                </div>

              </a>
            )
          })}
          
        </div>

      </div>
    </div>
  )
}

export default PostsList
"use client"

import Sidebar from '@/components/Sidebar'
import React, { useEffect } from 'react'
import prisma from '@/utils/db'
import { JobType } from '@/utils/type'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { formSchema } from '../../create-post/page'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { getJob } from '@/utils/actions'



const DetailPage = async ({ params }: { params: { id: number } }) => {
  const post = await prisma.jobs.findUnique({
    where: {
      id: Number(params.id),
    },  
  })

  console.log(post);


  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'> 
        <Sidebar />
      </div>

      <div className='col-span-4'>
        <h1>Detail Page</h1>
        {/* Add content here */}
        <div  className='border p-4 my-4 mx-3 col-span-1 hover:shadow-xl'>
          <h1 className='font-bold'>{post?.title}</h1>
          <p>Status:{post?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
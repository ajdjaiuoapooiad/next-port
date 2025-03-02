"use client"

import Sidebar from '@/components/Sidebar'
import React, { useEffect } from 'react'
import { getSingleJobAction, updateJobAction } from '@/utils/actions'
import EditJobForm from '@/components/EditJobForm'
import prisma from '@/utils/db'
import { JobType } from '@/utils/type'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { formSchema } from '../../create-post/page'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


export async function getData(id: number) {
  const res = await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
    cache: 'no-store'
  })
  const data: JobType = await res.json()
  console.log(data);

  return data;

}

const DetailPage = async ({ params }: { params: { id: number } }) => {
  const post = await getData(params.id);
  const {title, description} = post
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
          <h1 className='font-bold'>{title}</h1>
          <p>Status:{description}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
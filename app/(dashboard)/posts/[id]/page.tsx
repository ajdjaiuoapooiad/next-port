"use client"

import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import prisma from '@/utils/db'
import { JobType } from '@/utils/type'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema } from '../../create-post/page'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { getSingleJobAction } from '@/utils/actions'
import EditJobForm from '@/components/EditJobForm'


const DetailPage =  ({ params }: { params: { id: number } }) => {
    // 1. Define your form.
    const job =  getSingleJobAction(Number(params.id))
    if(job === null) {
        alert("Error fetching job")
    }
    console.log(job.title)
    console.log(job.description);
    

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        title: '',
        description: '',
      },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'> 
        <Sidebar />
      </div>

      <div className='col-span-4'>
        <h1>Detail Page</h1>
        {/* Add content here */}
        <EditJobForm />
       
      </div>
    </div>
  )
}

export default DetailPage
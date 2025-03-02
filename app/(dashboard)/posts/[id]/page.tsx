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


const DetailPage =  ({ params }: { params: { id: number } }) => {

    useEffect(() => {
        getSingleJobAction(Number(params.id))
    }, [params.id])
    const job = getSingleJobAction(Number(params.id))
    console.log(job)

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        title: job.title,
        description: job.description,
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
        <Form {...form}  >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Title</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Description</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" >更新</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default DetailPage
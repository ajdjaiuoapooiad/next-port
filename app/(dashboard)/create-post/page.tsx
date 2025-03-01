"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from "react-hook-form"
import { post } from "@/utils/actions"
import Sidebar from "@/components/Sidebar"


export const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
})


const CreatePost = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { title, description } = values
    post({ title, description })
    console.log(values)
  }

  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'> 
        <Sidebar />
      </div>


      <div className="col-span-4 px-10 py-10">
        <h1 className="text-2xl font-bold pb-5">CreatePage</h1>
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
            <Button type="submit" >投稿</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default CreatePost
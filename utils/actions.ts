'use server'
import { formSchema } from "@/app/(dashboard)/create-post/page"
import { z } from "zod"
import prisma from "./db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { CreateAndEditJobType, JobType } from "./type"



//Create機能
export const post = async ({title, description}: z.infer<typeof formSchema>) => {
    await prisma.jobs.create({
        data: {
            title,
            description,
        },
    })
    revalidatePath('/posts')
    redirect('/posts')
}


//Update機能
  export async function update(
    id: number,
    values: CreateAndEditJobType
  ): Promise<JobType | null> {
  
    try {
      const job: JobType = await prisma.jobs.update({
        where: {
          id,
        },
        data: {
          ...values,
        },
      });
      return job;
    } catch (error) {
      return null;
    }
  }


//Delete機能
export async function deleteJob(id: number) {
    await prisma.jobs.delete({
        where: {
            id,
        },
    })
    revalidatePath('/posts')
    redirect('/posts')
}

//Get機能
export async function getJob(id: number) {
    const job = await prisma.jobs.findUnique({
        where: {
            id,
        },
    })
    return job
}
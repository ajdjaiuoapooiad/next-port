'use server'
import { formSchema } from "@/app/(dashboard)/create-post/page"
import { z } from "zod"
import prisma from "./db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { JobType } from "./type"



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



export async function getSingleJobAction(id: number): Promise<JobType | null> {
    let job: JobType | null = null;
    try {
      job = await prisma.jobs.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      alert('Error fetching job');
    }
    if (!job) {
      redirect('/posts');
    }
    return job;
  }


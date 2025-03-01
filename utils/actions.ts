'use server'
import { formSchema } from "@/app/(dashboard)/create-post/page"
import { z } from "zod"
import prisma from "./db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"



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




import prisma from "@/utils/db"
import { NextResponse } from "next/server"


export const GET = async (req: Request) =>  {
    const posts = await prisma.jobs.findMany()
    return NextResponse.json(posts)
}

export const POST = async (req: Request) =>  {  
    const { title, description } = await req.json()

    const posts = await prisma.jobs.create({
        data: {
            title,
            description,
        }
    })
    return NextResponse.json(posts)
}
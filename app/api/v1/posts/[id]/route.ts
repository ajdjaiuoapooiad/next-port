
import prisma from "@/utils/db"
import { NextResponse } from "next/server"


export const GET = async (
    req: Request, 
    {params}: {params: {id: number}}
) =>  {
    const id = params.id
    const post = await prisma.jobs.findUnique({
        where: { id: Number(id) },
    })
    return NextResponse.json(post)
}

export const PUT = async (
    req: Request, 
    {params}: {params: {id: number}}
) =>  {
    const id = params.id
    const { title, description } = await req.json()

    const post = await prisma.jobs.update({
        where: { id: Number(id)},
        data: {
            title,
            description,
        }
    })
    return NextResponse.json(post)
}
export const DELETE = async (
    req: Request, 
    {params}: {params: {id: number}}
) =>  {
    const id = params.id
    const post = await prisma.jobs.delete({
        where: { id: Number(id) },
    })
    return NextResponse.json(post)
}
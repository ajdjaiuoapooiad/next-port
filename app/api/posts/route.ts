
import prisma from "@/utils/db"
import { NextResponse } from "next/server"


export const GET = async (req: Request) =>  {
    const posts = await prisma.jobs.findMany()
    return NextResponse.json(posts)
}

// export const POST = async (req: Request) =>  {  
//     const { title, content } = await req.json()

//     const posts = await prisma.post.create({
//         data: {
//             title,
//             content,
//         }
//     })
//     return NextResponse.json(posts)
// }
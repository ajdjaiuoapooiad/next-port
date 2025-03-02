"use client"

import Sidebar from '@/components/Sidebar'
import React, { useEffect } from 'react'
import { getSingleJobAction } from '@/utils/actions'
import EditJobForm from '@/components/EditJobForm'


const DetailPage =  ({ params }: { params: { id: number } }) => {

  useEffect(() => {
    getSingleJobAction(params.id) 
  }
  , []) 


  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'> 
        <Sidebar />
      </div>

      <div className='col-span-4'>
        <h1>Detail Page</h1>
        {/* Add content here */}
        
      </div>
    </div>
  )
}

export default DetailPage
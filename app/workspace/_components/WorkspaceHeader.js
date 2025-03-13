import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const WorkspaceHeader = () => {
  return (
    <div className='p-2 flex justify-between shadow-md'>
      <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
      <UserButton/>
    </div>
  )
}

export default WorkspaceHeader

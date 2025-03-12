import { Button } from '@/components/ui/button'
import { Layout } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import UploadPdfDialog from './UploadPdfDialog'

const SideBar = () => {
  return (
    <div className='shadow-lg h-screen mt-3 p-5'>
      <Image src={'/logo.svg'} alt='logo' width={90} height={90} className='rounded-[90%]'/>
      <div className='mt-4'>
        <UploadPdfDialog>
        <Button className="w-[85%] bg-blue-700 cursor-pointer">+ Upload PDF</Button>
        </UploadPdfDialog>
        <div className='flex gap-2 items-center mt-5 cursor-pointer w-[75%] hover:text-red-500'>
            <Layout/>
            <h2>WorkSpace</h2>
        </div>
      </div>
    </div>
  )
}

export default SideBar

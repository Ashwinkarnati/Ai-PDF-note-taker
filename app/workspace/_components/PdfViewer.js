import React from 'react'

const PdfViewer = ({fileUrl}) => {
    console.log(fileUrl)
  return (
    <div>
      <iframe src={fileUrl+"#toolbar=0"} className='h-[89vh] w-[100%]'/>
    </div>
  )
}

export default PdfViewer

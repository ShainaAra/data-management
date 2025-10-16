import React from 'react'

const page = async({params}) => {
    const {projectId} = await params
    console.log(projectId)
  return (
    <div>Export Page</div>
  )
}

export default page
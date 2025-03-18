import React from 'react'
import UserTable from './components/UserTable'

interface Props {
  searchParams:{sortOrder:string}
}


const page = async ({searchParams:{sortOrder}}:Props) => {
   console.log(sortOrder)
  return (
    <div>Users table
      <UserTable />
    </div>
  )
}

export default page
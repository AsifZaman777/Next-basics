import React from 'react'
import UserTable from './components/UserTable'

interface Props {
  searchParams:{sortOrder:string}
}


const page = async ({searchParams:{sortOrder}}:Props) => {
  return (
    <div>Users table
      <UserTable sortOrder={sortOrder} />
    </div>
  )
}

export default page
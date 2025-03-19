import React from 'react'
import UserTable from './components/UserTable'

interface Props {
  searchParams:{sortOrder:string}
}


const page = async ({searchParams}:Props) => {
  const {sortOrder} = await searchParams;  //nextjs 15 searchParams is asynchronous
  return (
    <div>Users table
      <UserTable sortOrder={sortOrder} />
    </div>
  )
}

export default page
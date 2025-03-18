import Link from 'next/link'
import React from 'react'

//declare a use type
interface User {
    createdAt: string
    name: string
    avater: string
    id: number
}

const UserTable = async () => {
    const res = await fetch('https://6787dbd7c4a42c9161088682.mockapi.io/api/users')
    const users: User[] = await res.json()
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>
                        <Link href="/routing-basic/users?sortOrder=name">
                            Name
                        </Link>
                    </th>
                    <th>createdAt</th>
                    <th>avater</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: User) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.createdAt}</td>
                        <td><img src={user.avater} alt={user.name} width="50" height="50" /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable
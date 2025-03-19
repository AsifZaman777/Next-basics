import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex gap-5 bg-slate-500 p-4 text-white font-medium'>
            <Link href="/" className='hover:underline'>Home</Link>
            <Link href="/routing-basic/users" className='hover:underline'>Users</Link>
        </div>
    );
};

export default Navbar;
import React from 'react';

interface Props {
  children: React.ReactNode;   
}

const AdminLayout = ({children}: Props) => {
    return (
        <div className='flex flex-col'>
            <nav className='bg-blue-500 text-white p-4'>
                <ul className='flex justify-items-center gap-5'>
                    <li className='font-bold'>Admin Panel</li>
                    <li>
                        <a href='#' className='hover:underline'>Home</a>
                    </li>
                    <li>
                        <a href='#' className='hover:underline'>Settings</a>
                    </li>
                    <li>
                        <a href='#' className='hover:underline'>Logout</a>
                    </li>
                </ul>
            </nav>
            <div className='flex'>
                <aside className='bg-slate-400 m-2 p-2'>Admin sidebar</aside>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default AdminLayout;
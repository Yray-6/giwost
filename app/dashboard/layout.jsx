'use client'
import Link from 'next/link';
import { FaClipboardList, FaHome, FaKey, FaLongArrowAltUp } from 'react-icons/fa';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen  bg-black">
      <aside className={`bg-gray-800 text-white fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-10 w-64`}>
        <div className="flex items-center justify-between p-4 md:hidden">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white focus:outline-none">
            &#x2715; {/* Close icon */}
          </button>
        </div>
        <nav className="mt-10">
          {/* <Link className="flex items-center py-2 px-8 text-gray-300 hover:bg-gray-700 hover:text-white" href="/dashboard/certificates">
            <FaClipboardList className="w-6 h-6 mr-3" />
           Add Certificates
          </Link>
          <Link className="flex items-center py-2 px-8 text-gray-300 hover:bg-gray-700 hover:text-white" href="/dashboard/certificateview">
            <FaClipboardList className="w-6 h-6 mr-3" />
            Certificates
          </Link> */}
          <Link href="/dashboard/blogs" className="flex items-center py-2 px-8 text-gray-300 hover:bg-gray-700 hover:text-white">
            <FaHome className="w-6 h-6 mr-3" />
            Create Blogs
          </Link>
          <Link href="/dashboard/blogsview" className="flex items-center py-2 px-8 text-gray-300 hover:bg-gray-700 hover:text-white">
            <FaHome className="w-6 h-6 mr-3" />
            Blogs
          </Link>
          <Link href="/dashboard/change-password" className="flex items-center py-2 px-8 text-gray-300 hover:bg-gray-700 hover:text-white">
            <FaKey className="w-6 h-6 mr-3" />
            Change Password
          </Link>
          <Link href="/dashboard/logout" className="flex items-center py-2 px-8 text-gray-300 hover:bg-gray-700 hover:text-white">
            <FaLongArrowAltUp className="w-6 h-6 mr-3" />
            Logout
          </Link>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="w-full bg-gray-800 text-white flex justify-between items-center p-4 md:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white focus:outline-none">
            &#9776; {/* Hamburger icon */}
          </button>
          <h1 className="text-lg font-bold">Dashboard</h1>
        </header>
        <main className="flex-1 p-10 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

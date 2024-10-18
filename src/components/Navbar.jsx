import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-[#11512a] text-white z-50 w-[100%] fixed top-0 left-0 min-h-[9vh]  items-center flex  px-4 py-4'>
            <div className="logo font-bold text-2xl md:text-3xl ml-10 px-4">
                <span className='text-green-500'>&lt; </span>
                Vault
                <span className='text-green-500'>Key /&gt;</span>
            </div>
            {/* <ul>
                  <li className='flex gap-5'>
                        <a className='text-lg hover:font-bold' href="\">Home</a>
                        <a className='text-lg hover:font-bold' href="#">About</a>
                        <a className='text-lg hover:font-bold' href="#">Contact</a>
                    </li>
                </ul> */}
        </nav>
    )
}

export default Navbar

import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#11512a] text-white flex items-center justify-center py-[9px] gap-6 md:gap-10 lg:gap-14 fixed bottom-0 left-0 w-full min-h-[9vh]'>
           <div className="logo font-bold text-2xl ml-18">
                    <span className='text-green-500'>&lt; </span>
                    Vault
                    <span className='text-green-500'>Key /&gt;</span>
                </div>
            <div className='text-2xl'>||</div>
            <div className='flex gap-2  items-center font-mono font-semibold text-lg'>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img className='invert h-6 mt-1 cursor-pointer hover:opacity-80 transition-opacity duration-500' src="icons/github.svg" alt="GitHub" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='hover:underline hover:text-green-400 transition duration-20 f'>
                    _avishkar__13
                </a>
            </div>
        </div>
    );
}

export default Footer;

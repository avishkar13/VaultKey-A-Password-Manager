import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#11512a] text-white flex items-center justify-center py-[9px] gap-10 lg:gap-14 fixed bottom-0 left-0 w-full min-h-[7vh]'>
           <div className="logo font-bold text-lg md:text-2xl ">
                    <span className='text-green-500'>&lt; </span>
                    Vault
                    <span className='text-green-500'>Key /&gt;</span>
                </div>
            <div className='text-2xl'>||</div>
            <div className='  font-mono font-semibold text-md'>
                <a className='flex gap-1 items-center' href="https://github.com/avishkar13" target="_blank" rel="noopener noreferrer">
                    <img className='invert h-6  cursor-pointer hover:opacity-80 transition-opacity duration-500' src="icons/github.svg" alt="GitHub" /> <span className='hover:underline hover:text-green-400 transition duration-20  '>_avishkar13</span>
                </a>
                
            </div>
        </div>
    );
} 

export default Footer;

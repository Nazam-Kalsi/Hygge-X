import React from 'react'

function Navigation() {
  return (
    <div className='flex gap-0 text-sm sm:text-base  sm:flex-row md:gap-2 my-14 items-center justify-start text-nowrap'>
        <img src="/Home.png" alt="home" />
        <p>{">"}</p>
        <p className='block sm:hidden'> ... &nbsp;</p>
        <button className='text-[#696671] sm:block hidden'>Flashcard</button>    
        <p className='sm:block hidden'>{">"}</p>
        <button className='text-[#696671] sm:block hidden'>Mathematics</button>    
        <p className='sm:block hidden'>{">"}</p>
        <button className='text-bg font-semibold '>Relation and Function</button>    
    </div>
  )
}

export default Navigation
import React from 'react'

function Navigation() {
  return (
    <div className='flex gap-2 my-14'>
        <img src="/Home.png" alt="home" />
        <p>{">"}</p>
        <button className='text-[#696671]'>Flashcard</button>    
        <p>{">"}</p>
        <button className='text-[#696671]'>Mathematics</button>    
        <p>{">"}</p>
        <button className='text-bg font-semibold'>Relation and Function</button>    
    </div>
  )
}

export default Navigation
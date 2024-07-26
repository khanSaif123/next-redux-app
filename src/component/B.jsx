"use client"
import React, { useRef } from 'react'

export const B = () => {
    let locRef = useRef()
    
    const handleClick = ()=>{
        let loc = locRef.current.value;
        alert(loc)
    }
  return (
    <div className='mb-10 ml-5 flex gap-5 flex-col border w-[30%] p-10 border-black rounded-md'>
        <h1>Component B</h1>
        <p>
            <b>Location: </b> <input  ref={locRef} style={{border:"2px solid", borderRadius:"10px"}}/>
        </p>
        <button onClick={handleClick}className='border-2 border-black w-36 rounded-lg'>Get Data</button>
    </div>
  )
}

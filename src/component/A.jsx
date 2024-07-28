"use client"
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

export const A = () => {
    let nameRef = useRef()

    // when we call the useDispatch it return the dispatch function.
    // By using this dispatch fuction we can dispatch the data to the reducer.
    const dispatch = useDispatch()

    const handleClick = ()=>{
        let name = nameRef.current.value;
        dispatch({type:"NAME_UPDATE", payload:name})
    }

  return (
    <div className='mt-5 mb-10 ml-5 flex gap-5 flex-col border w-[30%] p-10 border-black rounded-md'>
        <h1>Component A</h1>
        <p>
            <b>Name: </b> <input ref={nameRef} style={{border:"2px solid", borderRadius:"10px"}}/>
        </p>
    <button onClick={handleClick} className='border-2 border-black w-36 rounded-lg'>Get Data</button>
</div>
  )
}

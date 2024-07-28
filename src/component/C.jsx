"use client"
import React from 'react'
import { useSelector } from 'react-redux'

export const C = () => {
  let {name, loc} = useSelector((currState)=>{
      const {name, loc} = currState.appReducer;
      return {name, loc}
    
  })
  return (
    <div className='mt-20'>
        <h1>Component C</h1>
        <p>
            <h1>Name: {name}</h1>
        </p>
        <p>
            <h1>Location: {loc}</h1>
        </p>
    </div>
  )
}

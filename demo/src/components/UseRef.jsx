import React, { useEffect, useRef, useState } from 'react'
import './ref.css'
const UseRef = () => {
    const [value, setValue]=useState();
    let count =useRef(0);
useEffect(()=>{
    count.current +=1
},[value])
  return (
    <div>
        <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </div>
  )
}

export default UseRef
import React, { useEffect, useState } from 'react'

const States = ({ val }) => {
    const [value, setValue] = useState(0)
    const inc = (e) => {
        setValue(value+1)
    }
    const dec = (e) => {
        setValue(value-1)
    }
    useEffect(()=>{
        console.log('value', value)
    },[value])
    return (
        <>
            <p>Current state is {value}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </>
    )
}

export default States
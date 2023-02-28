import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0
    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }
    return <>
        <h2>{count}</h2>
        <button onClick={() => { dispatch(increment()) }}>Incr</button>
        <button onClick={() => { dispatch(decrement()) }}>Incr</button>
        <button onClick={() => { dispatch(incrementByAmount(addValue)) }}>Incr By amount</button>
        <input type="text" value={incrementAmount} onChange={(e) => { setIncrementAmount(e.target.value) }} />
        <button onClick={resetAll}>Reset</button>
    </>
}

export default Counter
import React, { useState } from 'react'
import "./counter.css"

function Counter() {

    const [count, setCount] = useState(0)

    function increment() {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    function decremnet() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    // const styles = {
    //     backgroundColor: "red",
    //     color: "white",
    //     fontSize: "20px",
    //     display: "flex"
    // }

    return (

        <>
            <div className='wrapper'>
                <h1>Counter</h1>
                <div className='event'>
                    <button onClick={decremnet}>Decrement</button>
                    <p>{count}</p>
                    <button onClick={increment}>Increment</button>
                </div>
                
            </div>
        </>

    )
}

export default Counter
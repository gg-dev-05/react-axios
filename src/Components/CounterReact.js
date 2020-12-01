import React, { useState } from 'react'

export default function CounterReact() {
    const [count, setCount] = useState(0)
    console.log("useState: ", useState(0))
    return (
        <div>
            <h1>{count}</h1>

            <h1 onClick={() => setCount(count + 1)}>
                Pluse
            </h1>
        </div>
    )
}

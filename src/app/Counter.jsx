"use client"
import { useState } from "react"

function incrementCount(count, setCount) {
    setCount(count + 1)
}
function decrementCount(count, setCount) {
    setCount(count - 1)
}

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={ () => decrementCount(count, setCount) }
        >
            Decrement
        </button>
      <p>Count: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={ () => incrementCount(count, setCount) }
      >
        Increment
      </button>
    </div>
  )
}
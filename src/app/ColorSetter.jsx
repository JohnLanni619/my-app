"use client"
import { useState } from "react"
export default function ColorSetter() {
    const [color, setColor] = useState("red")
    return (
        <div
            style={{backgroundColor: color }}
            className="p-4"
        >
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={ () => setColor("red") }
            >
                Red
            </button>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={ () => setColor("green") }
            >
                Green
            </button>
        </div>
    )
}
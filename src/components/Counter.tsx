"use client";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-2xl p-6 text-center">
        <h1 className="text-xl text-gray-400 font-bold mb-4">Simple Counter</h1>
        <p className="text-4xl font-semibold text-indigo-600 mb-6">{count}</p>
        <div className="flex gap-3">
          <div>
            <button
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-red-400 text-white rounded-xl hover:bg-red-600"
            >
              - Decrement
            </button>
          </div>
          <div>
            <button
              onClick={() => setCount(0)}
              className="px-4 py-2 bg-gray-400 text-white rounded-xl hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
          <div>
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-green-400 text-white rounded-xl hover:bg-green-600"
            >
              + increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;

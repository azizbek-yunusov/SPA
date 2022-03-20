import { useState } from "react";

export default function Search({ callBack = Function.prototype }) {
  const [value, setValue] = useState("");
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  const handleSubmit = () => {
    callBack(value)
  }

  return (
    <div className="flex justify-between max-w-xs sm:max-w-lg border-2 border-gray-500 rounded-lg items-center mx-auto mb-5 py-0.5 focus:border-red-600 shadow-md">
      <input
        required
        type="search"
        placeholder="Search..."
        className="bg-white w-full gap-10 text-sm focus:outline-none pl-3 h-8 mx-1"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        type="submit"
        className="mx-0.5  text-white outline-none p-2 bg-blue-600 rounded-md"
        onClick={handleSubmit}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  )
}
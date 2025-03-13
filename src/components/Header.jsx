import React from 'react'

function Header() {
  return (
    <div className="text-center">
      {/* <h1 className="text-2xl text-center font-bold text-red-400">Live Link</h1> */}
      <p className="text-blue-700 font-semibold border-1 w-fit mx-auto m-1 py-1 px-2 bg-white hover:bg-slate-300 rounded">
        <a href="https://sandybhai03.github.io/ReactToDo/">Click Me! See the Magic</a>
      </p>
    </div>
  )
}

export default Header
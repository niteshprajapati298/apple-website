import React from 'react'

const Loader = () => (
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-[10vw] h-[10vw] bg-gray-200 rounded-full flex justify-center items-center">
      Loading...
    </div>
  </div>
)

export default Loader

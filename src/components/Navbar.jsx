import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div>
            {['Phones','Macbooks','Tablets'].map((nav ,i)=>(
                <div key={nav}>
                    {nav}
                </div>
            ))}
        </div>
        <div>
            <img src={searchImg} alt="Search" width={18} height={18}/>
            <img src={bagImg} alt="Search" width={18} height={18}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

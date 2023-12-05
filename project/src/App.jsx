import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet, Link } from "react-router-dom";
import './App.css'


function App() {

  return (
    <>
      
      <nav>
        <ul>
     
          <li>
            {/* יצירת קישור */}
            <Link to={'statistic'}>Statistic</Link>
            
          </li>
          <li>
            {/* יצירת קישור */}
            <Link to={'customers'}>customers</Link>
            
          </li>
        </ul>
      </nav>
      <div>
        {/* לכאן יכנס התוכן של הניווט */}
        <Outlet />
      </div>
    </>
  )
}

export default App

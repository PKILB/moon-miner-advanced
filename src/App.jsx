import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
// import background from "../assets/img/background.jpg"



export function App() {

  return (
    <div className="App" id="app">
      {/* <header>
        <Navbar />
      </header> */}

      <main >
        <Outlet />
      </main>

      <footer className="bg-dark text-light text-center p-3 ">
        <button>
        <i className='mdi mdi-chevron-up fs-4'></i>
        </button>
      </footer>

    </div>
  )
}

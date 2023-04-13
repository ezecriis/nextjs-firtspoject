import React from 'react'
import Link from 'next/link'

export default function Navigation () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' href='/'>
          Next First App
        </Link>
        <Link className='nav-link active' aria-current='page' href='/about'>
          About
        </Link>
        <Link className='nav-link active' href='/services'>
          Services
        </Link>
      </div>
    </nav>
  )
}

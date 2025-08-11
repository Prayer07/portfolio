import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='nav'>
    <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/projects"}>Projects</Link>
        {/* <Link href={"/#about"}>About</Link> */}
        <Link href={"/contact"}>Contact</Link>
    </nav>
    </div>
    </>
  )
}

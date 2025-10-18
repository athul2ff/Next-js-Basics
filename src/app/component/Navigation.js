"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const path = usePathname();
  return (
    <nav className='flex gap-7'>
        <Link className = {`${path ==='/' ?'text-yellow-400':'text-blue-50 hover:underline'}`} href={"/"}>Home</Link>
        <Link className={`${path ==='/about'?'text-yellow-400':'text-blue-50 hover:underline'}`} href={"/about"}>About</Link>
        <Link className={`${path ==='/fetch-data'?'text-yellow-400':'text-blue-50 hover:underline'}`} href={"/fetch-data"}>Fetch data</Link>


    </nav>
  )
}

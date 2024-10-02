import Link from 'next/link'
import React from 'react'
import About from './about/page'
import Services from './services/page'
import Contact from './contact/page'

function page() {
  return (
    <>
    <h1 className='text-5xl text-center font-bold my-5'>NextJs</h1>
    <ul>
      <Link href={`about`}><li>About</li></Link>
      <Link href={`services`}><li>Services</li></Link>
      <Link href={`contact`}><li>Contact</li></Link>
    </ul>
    </>
  )
}

export default page
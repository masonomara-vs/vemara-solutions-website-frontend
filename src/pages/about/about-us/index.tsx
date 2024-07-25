import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default function index() {
  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="About" secondLink='/about' thirdTitle='About Us' />
      <Header
        label="About Us"
        title="[placeholder]"
        subtitle="[placeholder]" />
    </div>
  )
}

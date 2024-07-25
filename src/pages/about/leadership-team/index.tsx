import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default function index() {
  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="About" secondLink='/about' thirdTitle='Leadership Team' />
      <Header
        label="Leadership Team"
        title="[placeholder]"
        subtitle="[placeholder]" />
    </div>
  )
}

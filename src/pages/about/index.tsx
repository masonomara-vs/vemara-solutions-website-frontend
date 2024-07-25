import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default function index() {
  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="About"  />
      <Header
        label="About"
        title="[Placeholder]"
        subtitle="[Placeholder]" />
    </div>
  )
}

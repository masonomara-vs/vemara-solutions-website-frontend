import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function index() {
  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Services" />
      <Header
        label="Services"
        title="[Placeholder]"
        subtitle="[Placeholder]" />
    </div>
  )
}

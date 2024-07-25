import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default function index() {
  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Contact" secondLink='/contact' thirdTitle='Message Us' />
      <Header
        label="Message Us"
        title="General inquiries and getting started"
        subtitle="For any support, introductions, general interest, getting started on a project, or any other inquiries." />
    </div>
  )
}

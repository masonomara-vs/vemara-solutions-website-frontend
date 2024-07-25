import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Contact from '@/components/ScheduleContact';




export default function index() {


  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Contact" secondLink='/contact' thirdTitle='Schedule a Call' />
      <Header
        label="Schedule a Call"
        title="Let’s get started on your next project."
        subtitle="Thank you for your interest in Vemara Solutions! Please answer a few questions so we can better prepare to help you." />
      <div>
        <Contact />
      </div>
    </div>
  )
}

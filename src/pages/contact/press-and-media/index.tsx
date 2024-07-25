import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default function index() {
  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Contact" secondLink='/contact' thirdTitle='Press & Media' />
      <Header
        label="Press & Media"
        title="Connect with us for press and media inquiries."
        subtitle="For press information, including images, media, speaking engagements, questions, and articles." />
    </div>
  )
}

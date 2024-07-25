import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function index() {
  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Services" secondLink='/services' thirdTitle='Technology' />
      <Header
        label="Technology"
        title="Leveraging our expertise in industry-leading technology."
        subtitle="We work with a wide range of clients across various industries. This enables us to produce creative, high-performing products that stand out." />
    </div>
  )
}

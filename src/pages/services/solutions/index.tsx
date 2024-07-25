import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default function index() {
  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Services" secondLink='/services' thirdTitle='Solutions' />
      <Header
        label="Solutions"
        title="We are a full-service agency providing end-to-end strategy and implementation."
        subtitle="From ideating and researching business initiatives to the design and development of new and existing projects. We focus on delivering tailored, scalable, and reliable products." />
    </div>
  )
}

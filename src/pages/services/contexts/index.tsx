import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default function index() {
  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Services" secondLink='/services' thirdTitle='Contexts' />
      <Header
        label="Contexts"
        title="We work within different business contexts considering different aspects of your business"
        subtitle="We provide both end-to-end strategy and service. We prioritize understanding your business goals and drive you towards them." />
    </div>
  )
}

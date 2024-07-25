import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

export default function index() {
  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Careers" secondLink='/careers' thirdTitle='Job Application' />
      <Header
        label="Job Application"
        title="Apply for a role at Vemara Solutions."
        subtitle="If you think you’re a good fit for our innovative team, we’d love to hear from you." />
    </div>
  )
}

'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import slide_1 from '../assets/images'
const Hero = () => {
  return (
    <section>
        <Image className="w-full" src={slide_1.slide_1.src} alt='hero' width={960} height={546}/>
        <div><p>consult the doctor anytime at anywhere</p></div>
        <div><p>Expert health consultant anytime, anywhere</p></div>
        <div><p>access top tier health consultants from the comfort of your home or on the go. Our platform connect you with experienced medical professionals around the clock</p></div>
        <Button onClick={()=>{alert('test')}}>Register</Button>
    </section>
  )
}

export default Hero
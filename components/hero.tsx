'use client'
import React from 'react'
import { RainbowButton } from './magicui/rainbow-button'
import '../app/globals.css'
import StarBorder from './starborder'
import BlurText from './herotext'
import { BoxReveal } from './magicui/box-reveal'

const Hero = () => {
  return (
      
    <div className="flex h-screen flex-col gap-4 items-center justify-center">
      <div >
              <BlurText
                  text="Creative Design Agency"
                  delay={300}
                  animateBy="words"
                  direction="top"
                  className="text-5xl pl-4 md:pl-0 mb-8 md:text-8xl"
              />
    </div>
    <BoxReveal>
      <p>We Create in a bliq of time</p>
    </BoxReveal>  
    <BoxReveal>
      <div className="flex gap-4 mt-4 justify-center items-center ">
          <RainbowButton className="text-lg overflow-hidden" variant="default" size="lg">
          Get Started
        </RainbowButton>
        <StarBorder className="text-lg" color="cyan" speed="4s">
          Contact Us
        </StarBorder>

      </div>
    </BoxReveal>
    </div>
      
  )
}

export default Hero

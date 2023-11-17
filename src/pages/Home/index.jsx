import React from 'react'
import Hero from '../../components/Hero'
import Apps from '../../components/Apps'
import CourseVideo from '../../components/CourseVideo'
import Benefits from '../../components/Benefits'

export default function Home() {
  return (
    <div>
        <Hero />
        <Apps />
        <CourseVideo />
        <Benefits />
    </div>
  )
}

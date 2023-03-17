import React from 'react'
import AboutCard from './AboutCard'

export default function About({ data }) {
  return (
    <div className="relative mx-auto max-w-screen-2xl z-10" id="about">
      <div className="mx-auto max-w-4xl mt-2">
        <div className="px-3.5 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-medium md:text-4xl dark-color inline-block px-6 py-4 rounded-2xl text-bg">
              {data.heading}
            </h1>
            <h2 className="mt-6 text-xl md:text-2xl font-medium dark-color dark:text-white">{data.subHeading}</h2>
            <p className="mt-6 text-base leading-8 dark-color dark:text-white">
              {data.desc}
            </p>
          </div>
          <AboutCard roles={data.roles} />
        </div>
      </div>
      <img src={data.illustration.img} alt={data.illustration.name} className="absolute left-0 bottom-0 -z-10 hidden lg:block" />
    </div>
  )
}

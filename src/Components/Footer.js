import React from 'react'
import SocialLinks from './SocialLinks'

const Footer = ({ data, links }) => {
    return (
        <div className="bg-dark dark:bg-light" id="connect">
            <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 mt-2 py-12">
                <h1 className="text-3xl md:text-4xl text-center text-white dark:dark-color">
                    <img src={data.heading.img} alt={data.heading.name} className="inline-block h-9 w-9 -mt-2 light-icon dark:dark-icon" />
                    <span className="pl-3">{data.heading.name}</span>
                </h1>
                <form>
                    <div className="relative mt-8 mx-auto w-full sm:w-80">
                        <input type="email" placeholder="Enter your email address" className="w-full h-12 p-4 rounded-lg outline-none" />
                        <a href={data.input.src}  target="_blank" className="absolute rounded-lg p-1 mail-button"><img src={data.input.img} alt={data.input.name} className="w-8 h-8" /></a>
                    </div>
                </form>
                <div className="mt-10 text-center">
                    <SocialLinks links={links} color="light-icon dark:dark-icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer

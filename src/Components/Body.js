import React, { useState } from 'react'
import Navigation from './Navigation'
import About from './About'
import Heading from './Heading'
import WorkCard from './WorkCard'
import ProjectCard from './ProjectCard'
import Footer from './Footer'

const Body = ({ Data }) => {

    const [darkToggle, setDarkToggle] = useState(false)

    const changeTheme = () => {
        setDarkToggle(!darkToggle)
    }

    return (
        <>
            <div className={darkToggle ? "dark" : null}>
                <div className="bg-light dark:bg-dark">
                    <Navigation logo={Data.Logo} icon={Data.NavIcon} links={Data.SocialLinks} changeTheme={changeTheme} darkToggle={darkToggle} />
                    <About data={Data.About} />
                    <div className="bg-dark dark:bg-light" id="work">
                        <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 mt-2 py-12">
                            <Heading heading="Experience" color="text-white dark:dark-color" />
                            <WorkCard work={Data.Work} />
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 mt-2 py-12" id="project">
                        <Heading heading="Projects" color="dark-color dark:text-white" />
                        <ProjectCard projects={Data.Projects} />
                    </div>
                    <Footer data={Data.Connect} links={Data.SocialLinks} />
                </div>
            </div>
        </>
    )
}

export default Body

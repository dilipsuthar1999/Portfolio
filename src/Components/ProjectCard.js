import React from 'react'

const ProjectCard = ({ projects }) => {
    return (
        <div className="mt-14 grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
            {
                projects.map((item, i) => (
                    <div key={i} className="group relative rounded-2xl h-72 overflow-hidden project-card dark:project-card-light">
                        <img src={item.img} alt={item.name} className="w-full h-full" />
                        <h5 className="text-lg text-white absolute inset-x-0 bottom-0 py-3 text-center">{item.name}</h5>
                        <div className="absolute inset-0 project-body">
                            <div className="p-5 absolute inset-x-0 text-center project-body-center">
                                <h5 className="text-lg text-white">{item.name}</h5>
                                <p className="mt-2 text-base text-white">{item.role}</p>
                                <p className="mt-2 text-sm gray-color">{item.desc}</p>
                                <div className="mt-4 flex space-x-5 justify-center items-center">
                                {
                                    item.links.map((data, i)=>(
                                        <a href={data.link} key={i} target="_blank">
                                            { data.img==="" ? <span>{data.name}</span> : <div className="rounded-full project-link-img"><img src={data.img} alt={data.name} className="w-7 h-7 dark-icon" /></div>}
                                        </a>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default ProjectCard

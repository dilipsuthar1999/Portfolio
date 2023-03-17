import React from 'react'

const WorkCard = ({ work }) => {
    return (
        <div className="mt-14 grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
            {
                work.map((item, i) => (
                    <div key={i} className="group relative rounded-2xl p-5 ease-in duration-100 work-card">
                        <p className="text-base gray-color">{item.company}</p>
                        <h5 className="text-lg dark-color font-medium">{item.role}</h5>
                        <p className="text-base gray-color">{item.period}</p>
                        <hr className="my-4 h-0.5" />
                        <p className="text-base dark-color">{item.responsibility}</p>
                    </div>
            ))}
        </div>
    )
}

export default WorkCard

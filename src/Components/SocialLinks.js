import React from 'react'

const SocialLinks = ({links, color}) => {
    return (
        <div className="flex space-x-1 justify-center">
            {
                links.map((item, i) => (
                    <a
                        key={item.name}
                        href={item.link}
                        className='px-3 py-2'
                        target="_blank"
                    >
                        <img src={item.img} alt={item.name} className={`icon h-7 ${color}`} />
                    </a>
                ))}
        </div>
    )
}

export default SocialLinks

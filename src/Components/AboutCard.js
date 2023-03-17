
export default function AboutCard({ roles }) {
    return (
        <div className="mt-8 grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2">
            {
                roles.map((item, i) => (
                    <div key={i} className="group relative rounded-2xl p-5 text-center ease-in duration-200 about-card">
                        <div className="p-5 inline-block card-img rounded-full">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-12 h-12"
                            />
                        </div>
                        <div className="mt-2.5">
                            <div>
                                <h3 className="text-lg font-medium dark-color">
                                    {item.name}
                                </h3>
                                <p className="mt-2.5 text-base gray-color">{item.desc}</p>
                                <div className="flex flex-wrap justify-center space-x-5">
                                    {
                                        item.skills.map((skill,i) =>
                                            <img src={skill.img} alt={skill.name} key={i} className="h-10 mt-5" />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

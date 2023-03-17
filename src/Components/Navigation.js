import { Disclosure } from '@headlessui/react'
import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks'

const navlinks = [
    { name: 'About', href: '#about', current: false },
    { name: 'Experience', href: '#work', current: false },
    { name: 'Projects', href: '#project', current: false },
    { name: 'Connect', href: '#connect', current: false },
]

export default function Navigation({ logo, icon, links, changeTheme, darkToggle }) {
    const [stickyClass, setStickyClass] = useState('relative pt-2');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 60 ? setStickyClass('fixed top-0 inset-x-0 z-20 update-nav-design') : setStickyClass('relative pt-2');
        }
    };

    return (
        <div className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ease-in duration-75 ${stickyClass}`}>
            <Disclosure as="nav" className="nav-design">
                {({ open }) => (
                    <>
                        <div className="relative flex h-14 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <button className="rounded-full p-2 mr-2 theme-btn"
                                    onClick={() => changeTheme()}>
                                    <img src={darkToggle ? icon.Dark.img : icon.Light.img} alt={darkToggle ? icon.Dark.name : icon.Light.name} className="w-6 h-6 dark-icon" />
                                </button>
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 mr-2">
                                    {open ? (
                                        <img src={icon.Close.img} alt={icon.Close.name} className="block h-6 w-6 icon dark-icon" />
                                    ) : (
                                        <img src={icon.Open.img} alt={icon.Open.name} className="block h-6 w-6 icon dark-icon" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center">
                                <div className="flex flex-shrink-0 items-center pl-2">
                                    <img
                                        className="block h-10 w-10"
                                        src={logo.img}
                                        alt={logo.name}
                                    />
                                </div>
                                <div className="hidden md:ml-3 md:block">
                                    <div className="flex space-x-1">
                                        {navlinks.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className='px-3 py-2 text-base'
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden md:ml-6 md:block">
                                    <SocialLinks links={links} color="dark-icon" />
                                </div>
                                <div className="hidden md:ml-2 md:block">
                                    <button className="rounded-full p-2 mr-2 theme-btn"
                                        onClick={() => changeTheme()}>
                                        <img src={darkToggle ? icon.Dark.img : icon.Light.img} alt={darkToggle ? icon.Dark.name : icon.Light.name} className="w-6 h-6 dark-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navlinks.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className='block rounded-md px-3 py-2 text-base'
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                                <SocialLinks links={links} color="dark-icon" />
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

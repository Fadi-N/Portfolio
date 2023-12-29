'use client'

import {Button, Link, Tab, Tabs} from "@nextui-org/react";
import {motion} from "framer-motion"
import {links} from "@/lib/data";
import {useActiveSectionContext} from "@/app/providers";
import clsx from "clsx";

const Header = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <header className="flex flex-row items-center justify-center">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-gray-100 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full z-[1001]"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] z-[1002]">
                <div className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-2">
                    {links.map((link) => (
                        <motion.div
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Button
                                as={Link}
                                className={clsx(
                                    "flex items-center justify-center bg-transparent",
                                    {"bg-white": activeSection === link.name}
                                )}
                                href={link.hash}
                                radius="full"
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className="bg-white rounded-full absolute -z-10"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Header;


/*
{/!*<motion.div
                className="fixed top-0 left-1/2 -translate-x-1/2 sm:top-6 z-[1001]"
                initial={{y: -100, x: "-50%", opacity: 0}}
                animate={{y: 0, x: "-50%", opacity: 1}}
                /!*transition={{type: "tween", duration: 0.2}}*!/
>
<Tabs
    classNames={{tabList: " bg-opacity-80 shadow-lg shadow-black/[0.03]"}}
    radius="full"
    aria-label="Tabs links"
        >
        {links.map((link) => (
                <Tab
                    key={link.hash}
                    title={<a href={link.hash}>{link.name}</a>}
                    aria-selected={true}
                    tabIndex="0"
                    data-selected={true}
                />
            ))}
</Tabs>
</motion.div>*!/}*/

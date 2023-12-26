'use client'

import {Tab, Tabs} from "@nextui-org/react";
import {motion} from "framer-motion"
import {links} from "@/lib/data";

const Header = () => {
    return (
        <header className="flex flex-row items-center justify-center z-[1001]">

            <motion.div
                className="fixed top-0 left-1/2 -translate-x-1/2 sm:top-6"
                initial={{y: -100, x: "-50%", opacity: 0}}
                animate={{y: 0, x: "-50%", opacity: 1}}
                /*transition={{type: "tween", duration: 0.2}}*/
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
                        />
                    ))}
                </Tabs>
            </motion.div>


        </header>
    )
}

export default Header;
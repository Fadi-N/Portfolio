'use client'

import {Avatar, Button, ButtonGroup, Link} from "@nextui-org/react";
import {MdDownload} from "react-icons/md";
import {HiCursorClick} from "react-icons/hi";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {motion} from "framer-motion"
import {useSectionInView} from "@/lib/hooks";


const Intro = () => {
    const {ref} = useSectionInView("Home", 0.5);

    return (
        <section
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
            ref={ref}
        >
            <motion.div
                className="flex items-center justify-center"
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
            >
                <Avatar
                    className="w-20 h-20 text-large"
                    src="./avatar.jpg"
                />
            </motion.div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
            >
                <span className="font-bold">Hello, I'm Fadi</span>, a <span className="font-bold">Frontend Web Developer</span> with <span className="font-bold">2 years</span> of hands-on experience.
                My playground revolves around <span className="underline">React</span> and <span className="underline">Angular</span>, where I create interactive and engaging <span className="italic">websites & apps. </span>
                Let's build something remarkable together!
            </motion.h1>
            <motion.div
                className="flex flex-col items-center justify-center gap-2 sm:flex-row"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.1}}
            >
                <Button
                    className="bg-black text-white"
                    as={Link}
                    href="#contact"
                    radius="full"
                    endContent={<HiCursorClick/>}
                >Contact me here
                </Button>
                <Button
                    className="bg-white"
                    as={Link}
                    href="/CV.pdf"
                    variant="bordered"
                    radius="full"
                    endContent={<MdDownload/>}
                    download
                >Download CV
                </Button>
                <ButtonGroup>
                    <Button
                        className="bg-[#0e76a8] text-white"
                        as={Link}
                        href="https://www.linkedin.com/in/fadi-nachawati-64246b256/"
                        target="_blank"
                        radius="full"
                        isIconOnly
                    ><FaLinkedin/>
                    </Button>
                    <Button
                        className="bg-[#333] text-white"
                        as={Link}
                        href="https://github.com/Fadi-N"
                        target="_blank"
                        radius="full"
                        isIconOnly
                    ><FaGithub/>
                    </Button>
                </ButtonGroup>
            </motion.div>
        </section>
    )
}

export default Intro
'use client'

import React, {useEffect} from "react";
import SectionHeading from "@/components/section-heading";
import {motion} from "framer-motion"
import {Chip} from "@nextui-org/chip";
import {skillsData} from "@/lib/data";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/app/providers";
import {useSectionInView} from "@/lib/hooks";


const About = () => {
    const {ref} = useSectionInView("About");

    return (
        <motion.section
            id="about"
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            ref={ref}
        >
            <SectionHeading>About</SectionHeading>
            <p className="mb-3">
                I hold a Bachelor of Engineering degree in <span className="font-bold">Computer Science</span> and I'm
                currently pursuing a Master's degree in the same field, demonstrating my commitment to continuous
                learning and academic development.
            </p>
            <p>
                In the field of programming, my favourite aspect is <span className="italic">problem solving</span> -
                an
                immersive challenge that fuels my passion for coding where I find joy in <span className="italic">solving complex problems.</span>
            </p>
            <div className="my-4">
                My programming stack includes:
                {skillsData.map((skill, index) => (
                    <React.Fragment key={index}>
                        <Chip
                            className="mx-1"
                            startContent={skill.icon}
                            variant="faded"
                            size="sm"
                        >
                            {skill.title}
                        </Chip>
                    </React.Fragment>
                ))}
            </div>
            <p>
                Beyond coding, I actively seek learning opportunities to enhance my skills and stay current with
                technological advancements. In my free time, I indulge in two other passions: <span
                className="font-bold">traveling</span> to discover new
                places and immersing myself in the realm of <span className="font-bold">computer games.</span> These
                pursuits bring balance to my life,
                supporting creativity and resilience in both the digital and real worlds.
            </p>

        </motion.section>
    )
}

export default About
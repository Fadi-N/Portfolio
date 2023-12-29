'use client'

import SectionHeading from "@/components/section-heading";
import {skillsData} from "@/lib/data";
import {Chip} from "@nextui-org/chip";
import {motion} from "framer-motion";
import React from "react";
import {useSectionInView} from "@/lib/hooks";


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};
const Skills = () => {
    const {ref} = useSectionInView("Skills", 0.5);

    return (
        <section
            id="skills"
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
            ref={ref}
        >
            <SectionHeading>My skills</SectionHeading>
            <div className={"flex flex-wrap justify-center"}>
                {skillsData.map((skill, index) => (
                    <React.Fragment key={index}>
                        <motion.div
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            <Chip
                                className="m-1"
                                classNames={{
                                    base: "bg-gradient-to-l from-gray-100 to-gray-300 border-small border-gray/50 shadow-gray-500/30",
                                    content: "drop-shadow shadow-black text-black",
                                }}
                                startContent={skill.icon}
                                variant="shadow"
                            >{skill.title}</Chip>
                        </motion.div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default Skills
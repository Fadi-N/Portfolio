'use client'

import React, {ReactNode} from "react";
import {Chip} from "@nextui-org/chip";
import {Card, CardBody, CardFooter, CardHeader, Divider, Image, Link} from "@nextui-org/react";
import {motion, useScroll, useTransform} from "framer-motion"
import {useRef} from "react";

interface ProjectProps {
    title: string;
    subtitle: string;
    description: ReactNode;
    tags: readonly string[];
    url: string;
    footer: string;
    imageUrl: string;
}

const Project = ({title, subtitle, description, tags, url, imageUrl, footer}: ProjectProps) => {
    console.log(url)
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="mb-8">
                <Card className="max-w-[720px]">
                    <CardHeader className="flex gap-3">
                        <Image
                            className="border border-black p-1"
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src={imageUrl}
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">{title}</p>
                            <p className="text-small text-default-500">{subtitle}</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <div className="px-1">
                            {description}
                        </div>
                        <div className="flex flex-wrap items-center mt-3">
                            {tags.map((tag, index) => (
                                <React.Fragment key={index}>
                                    <Chip
                                        className="m-1 me-0"
                                        classNames={{
                                            base: "bg-gradient-to-l from-gray-700 via-gray-900 to-black border-small border-white/50 shadow-gray-500/30",
                                            content: "drop-shadow shadow-black text-white",
                                        }}
                                        variant="shadow"
                                        size="sm"
                                    >{tag}</Chip>
                                </React.Fragment>
                            ))}
                        </div>
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        {footer ? (
                            <p className="text-xs text-default-400 ms-1">{footer}</p>
                            ): (
                                <Link
                                    className="text-xs ms-1"
                                    isExternal
                                    showAnchorIcon
                                    href={url}
                                >
                                    See source code on GitHub.
                                </Link>
                            )}

                    </CardFooter>
                </Card>
            </section>
        </motion.div>
    )
}

export default Project
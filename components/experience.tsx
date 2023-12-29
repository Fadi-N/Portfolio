'use client'

import React from "react";
import SectionHeading from "@/components/section-heading";
import {experiencesData} from "@/lib/data";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {Card, CardBody, CardHeader, Divider, Image} from "@nextui-org/react";
import {useSectionInView} from "@/lib/hooks";

const Experience = () => {
    const { ref } = useSectionInView("Experience");

    return (
        <section
            id="experience"
            className="scroll-mt-28 mb-28 w-[20rem] sm:mb-40 sm:w-[42rem]"
            ref={ref}
        >
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline lineColor="#E5E7EB">
                {experiencesData.map((experience, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                boxShadow: "none",
                                padding: "0",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #E5E7EB",
                            }}
                            icon={experience.icon}
                            iconStyle={{
                                backgroundColor: "white",
                                boxShadow: "-3px 3px 10px 4px rgba(0, 0, 0, 0.05)",
                            }}
                            visible={true}
                        >
                            <Card className={`from-gray-100 to-gray-300 border-small border-gray/50 shadow-gray-500/30 ${index % 2 === 0 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'}`}>
                                <CardHeader>
                                    <div className="flex flex-col">
                                        <span className="text-md">{experience.title}</span>
                                        <span className="text-small text-default-500">{experience.date}</span>
                                        <span className="text-xs text-default-400">{experience.location}</span>
                                        {experience.subtitle && (<span className="text-xs text-default-400">{experience.subtitle}</span>)}
                                    </div>
                                </CardHeader>
                                {experience.description && (
                                    <>
                                        <Divider/>
                                        <CardBody>
                                            <span>{experience.description}</span>
                                        </CardBody>

                                    </>
                                )}
                            </Card>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}
export default Experience
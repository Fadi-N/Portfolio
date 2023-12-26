'use client'

import SectionHeading from "@/components/section-heading";
import {Input, Textarea} from "@nextui-org/input";
import {Button, Link} from "@nextui-org/react";
import {IoIosSend} from "react-icons/io";

const Contact = () => {
    return (
        <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
            <SectionHeading>Contact Me</SectionHeading>
            <div>
                <p className="mb-8">Please feel free to contact me directly at <Link
                    href="mailto:fadinachawati17@gmail.com"
                    showAnchorIcon
                >fadinachawati17@gmail.com</Link> or through the form below.
                </p>
                <form action={async (formData) => {
                    console.log(formData)
                }}>
                    <Input
                        className="mb-4"
                        type="email"
                        label="Email"
                        size="sm"
                        isRequired
                    />
                    <Textarea
                        className="mb-4"
                        label="Message"
                        placeholder="Enter your message"
                        isRequired
                    />
                    <Button
                        className="bg-black text-white float-right"
                        radius="full"
                        endContent={<IoIosSend/>}
                    >
                        Send
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default Contact
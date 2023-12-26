'use client'

import SectionHeading from "@/components/section-heading";
import {Input, Textarea} from "@nextui-org/input";
import {Link} from "@nextui-org/react";
import {getFormData} from "@/actions/get-form-data";
import {motion} from "framer-motion";
import SubmitButton from "@/components/contact-form/submit-button";
import toast from "react-hot-toast";

const Contact = () => {
    return (
        <motion.section
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <div>
                <p className="mb-8">Please feel free to contact me directly at <Link
                    href="mailto:fadinachawati17@gmail.com"
                    showAnchorIcon
                >fadinachawati17@gmail.com</Link> or through the form below.
                </p>
                <form action={async (formData) => {
                    const data = await getFormData(formData);
                    if (data?.error) {
                        toast.error(data.error);
                        return;
                    }

                    toast.success("Email sent successfully!");
                }}>
                    <Input
                        className="mb-4"
                        type="email"
                        name="email"
                        label="Email"
                        size="sm"
                        maxLength={500}
                        isRequired
                    />
                    <Textarea
                        className="mb-4"
                        name="message"
                        label="Message"
                        placeholder="Enter your message"
                        maxLength={5000}
                        isRequired
                    />
                    <SubmitButton/>
                </form>
            </div>
        </motion.section>
    )
}

export default Contact
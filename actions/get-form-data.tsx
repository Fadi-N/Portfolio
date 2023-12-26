"use server";

import {Resend} from "resend";
import {validateString} from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function getFormData(formData: FormData) {
    const senderEmail = formData.get("email");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender email"
        }
    }

    if (!validateString(message, 5000)){
        return {
            error: "Invalid message"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Portfolio - contact form <onboarding@resend.dev>',
            to: ['fadinachawati17@gmail.com'],
            subject: 'Message from portfolio contact form',
            reply_to: senderEmail as string,
            text: message as string
        });
    }catch (error){
        return {
            error: "Failed to send your email! Please, try again later."
        }
    }

    return {data};

}
import {
    Html,
    Body,
    Head,
    Hr,
    Container,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

interface SendEmailCardProps {
    senderEmail: string,
    message: string
}

const SendEmailCard = ({senderEmail, message}: SendEmailCardProps) => {
    return (
        <Html>
            <Tailwind>
            <Head/>


                        <div
                            className="flex flex-col relative overflow-hidden h-auto text-foreground bg-content1 outline-none focus:z-10 focus:outline-2 focus:outline-focus focus:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none max-w-[340px]"
                        >
                            <div
                                className="flex p-3 z-10 w-full items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large justify-between"
                            >
                                <div className="flex gap-5">

                                    <div className="flex flex-col gap-1 items-start justify-center">
                                        <Text
                                            className="text-small font-semibold leading-none text-default-600">{senderEmail}</Text>
                                    </div>
                                </div>
                            </div>
                            <Hr className="shrink-0 bg-divider border-none w-full h-divider"/>
                            <div
                                className="relative flex w-full flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased p-3 text-small text-default-400">
                                <Text>{message}</Text>
                            </div>
                        </div>
            </Tailwind>
        </Html>
    )
}

export default SendEmailCard
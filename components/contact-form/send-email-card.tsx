import {Image, Card, CardFooter} from "@nextui-org/react";

const SendEmailCard = () => {
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none flex items-center"
        >
            <Image
                className="object-cover mx-auto py-4"
                src="./F.png"
                width={200}
                height={200}
            />
            <CardFooter
                className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 mb-8 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_20px)] shadow-small z-10">
                <p className="text-tiny text-black/80">Available soon.</p>
            </CardFooter>
        </Card>
    )
}

export default SendEmailCard
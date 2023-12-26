import {IoIosSend} from "react-icons/io";
import {Button, Spinner} from "@nextui-org/react";
import {useFormStatus} from "react-dom";

const SubmitButton = () =>{
    const {pending} = useFormStatus()

    return(
        <>
            {pending ? (
                <Button
                    className="bg-black text-white float-right"
                    radius="full"
                    color="primary"
                    isLoading
                >
                </Button>
            ): (
                <Button
                    className="bg-black text-white float-right"
                    type="submit"
                    radius="full"
                    endContent={<IoIosSend/>}
                >
                    Send
                </Button>
            )}
        </>

    )
}

export default SubmitButton
'use client'
import { useForm } from "react-hook-form"
import { useSearchParams } from "next/navigation";
import { sendClickup } from "./send-clickup";
import SubmitButton from "./submit-button";

export type FormData = {
    name: string
    email: string
    subj?: string
    message: string
}

export default function SendForm({ className }: Readonly<{ className?: string }>) {
    const { register, handleSubmit, reset } = useForm<FormData>()
    let formSubj = useSearchParams().get('subject-text');

    const onSubmit = async (data: FormData) => {
        try {
            sendClickup(data); 
            reset(); 
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            <label className="flex flex-col pb-[0.5em]">Name*{' '}
                <input placeholder="Enter you name"
                    {...register("name", { required: true })}
                    className="border p-2 bg-inherit focus:outline-none focus:ring focus:ring-main-sky" />
            </label>

            <label className="flex flex-col pb-[0.5em]" >Email{' '}
                <input placeholder="example@domain.com"
                    {...register("email")}
                    className="border p-2 bg-inherit focus:outline-none focus:ring focus:ring-main-sky" />
            </label>

            <label className="flex flex-col pb-[0.5em]" >Subject{' '}
                <input placeholder="Subject"
                    {...register("subj")}
                    defaultValue={formSubj ?? ''}
                    className="border p-2 bg-inherit focus:outline-none focus:ring focus:ring-main-sky" />
            </label>

            <label className="flex flex-col col-span-2 pb-[0.5em]">Message{' '}
                <textarea placeholder="Type your message"
                    {...register("message", { required: true })}
                    className="border p-2 bg-inherit focus:outline-none focus:ring focus:ring-main-sky" />
            </label>

            <SubmitButton
                pendingText="Sending ..."
                className='border-main-sky bg-main-sky dark:bg-sky-300 text-white duration-300 dark:text-black hover:bg-white hover:text-main-sky
                font-semibold px-[1em] py-[0.5em] border'>
                Send
            </SubmitButton>
        </form >
    )
}

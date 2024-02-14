'use client'
import { useForm } from "react-hook-form"
import { sendEmail } from './send-email';

export type FormData = {
    name: string
    email: string
    subj?: string
    message: string
    check: boolean
}

export default function SendForm({ className }: Readonly<{ className?: string }>) {

    function onSubmit(data: FormData) {
        console.log(`form`, data);
        sendEmail(data);
    }

    const {
        register,
        handleSubmit,
    } = useForm<FormData>()

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`text-xl ${className}`}>

            <label className="flex flex-col pb-[0.5em]">Name*{' '}
                <input placeholder="Enter you name"
                    {...register("name", { required: true })}
                    className="border-2 p-2 bg-inherit focus:outline-none focus:ring focus:ring-main-sky" />
            </label>

            <label className="flex flex-col pb-[0.5em]" >Email{' '}
                <input placeholder="example@domain.com"
                    {...register("email")}
                    className="border-2 p-2 bg-inherit focus:outline-none focus:ring focus:ring-main-sky" />
            </label>

            <label className="flex flex-col pb-[0.5em]" >Subject{' '}
                <input placeholder="Subject"
                    {...register("subj")}
                    className="border-2 p-2 bg-inherit focus:outline-none focus:ring focus:ring-main-sky" />
            </label>

            <label className="flex flex-col col-span-2 pb-[0.5em]">Message{' '}
                <textarea placeholder="Type your message"
                    {...register("message", { required: true })}
                    className="border-2 p-2 bg-inherit focus:outline-none focus:ring focus:ring-main-sky" />
            </label>

            <label className="flex flex-row pb-[0.5em]" >
                <input type="checkbox"
                    {...register("check")}
                    className="mr-2 p-2 bg-inherit focus:outline-none focus:ring focus:ring-main-sky" />{' '}
                Send me a copy of this message
            </label>

            <input type="submit"
                className="border-main-sky bg-main-sky dark:bg-sky-300 text-white dark:text-black hover:bg-white hover:text-main-sky duration-300
                font-semibold px-[1em] py-[0.5em] border "/>
        </form>
    )
}

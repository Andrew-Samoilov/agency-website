'use client'
import { useForm } from "react-hook-form"
// import { sendEmail } from './send-email';

export type FormData = {
    name: string
    email: string
    subject?: string
    message: string
    check: boolean
}

export default function SendForm({ formSubject, }: Readonly<{ formSubject?: string }>) {

    function onSubmit(data: FormData) {
        console.log(`form`, data);
        // sendEmail(data);
    }

    const {
        register,
        handleSubmit,
    } = useForm<FormData>()

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="text-xl ">

            <label className="flex flex-col pb-[0.5em]">Name*{' '}
                <input placeholder="Enter you name"
                    {...register("name", { required: true })}
                    className="border-2 p-2" />
            </label>

            <label className="flex flex-col pb-[0.5em]" >Email{' '}
                <input placeholder="example@domain.com"
                    {...register("email")}
                    className="border-2 p-2" />
            </label>

            {!formSubject ?
                <label className="flex flex-col pb-[0.5em]" >Subject{' '}
                    <input placeholder="Subject"
                        {...register("subject")}
                        className="border-2 p-2" />
                </label>
                : ''}


            <label className="flex flex-col col-span-2 pb-[0.5em]">Message{' '}
                <textarea placeholder="Type your message"
                    {...register("message", { required: true })}
                    className="border-2 p-2" />
            </label>

            <label className="flex flex-row pb-[0.5em]" >
                <input type="checkbox" {...register("check")} className="mr-2 p-2" />{' '}
                Send me a copy of this message
            </label>

            <input type="submit" className="bg-neutral-200 font-bold text-main-sky px-4 py-2" />
        </form>
    )
}

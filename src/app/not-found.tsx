import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <>
            <section className="flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 lg:pr-32 ">
                <p className="pb-[0.25em] text-7xl md:text-9xl lg:text-[192px] text-main-sky font-bold">404!</p>
                <h1 className="pb-[0.5em] text-3xl md:text-6xl lg:text-8x">Page Not Found</h1>
                <p className="pb-[0.5em] text-xl md:text-2xl ">Oops! The page you are looking for, couldn&#39;t be found.</p>
            </section>
            <section className="z-0 relative flex justify-around  p-6 md:p-12 lg:p-24 lg:pr-32 bg-main-sky text-black ">
                <Image src={"/images/bg-drop.svg"}
                    alt="bg"
                    fill={true}
                    className="-z-10"
                />
                <Link
                    href={'/'}
                    className=" border  px-[2em] py-[1em] text-xl md:text-2xl
                    duration-300 hover:bg-white  hover:text-main-sky">Back to home
                </Link>
                <Link
                    href={'/projects'}
                    className="border px-[2em] py-[1em] text-xl md:text-2xl
                    duration-300 hover:bg-white  hover:text-main-sky">View our work
                </Link>
                <Link
                    href={'/contact'}
                    className="border px-[2em] py-[1em] text-xl md:text-2xl
                    duration-300 hover:bg-white  hover:text-main-sky">Contact us
                </Link>
            </section>
        </>
    );
}

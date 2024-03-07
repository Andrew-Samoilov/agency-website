import Image from "next/image";
import SendForm from "@/components/form/form";
import Link from "next/link";


export default function ContactPage() {
  return (
    <main className="text-xl">
      {/* <section className="v-[50vw] h-[50vh]">
        <iframe src='https://my.spline.design/untitled-24a251ac3efb2dedde3e0308d62a2aaf/' frameborder='0' width='100%' height='100%'></iframe>
      </section> */}
      <section className="lg:flex items-center ">
        <div className="p-6 md:p-12 lg:p-24 lg:py-0">
          <h1 className="text-left text-3xl md:text-6xl lg:text-8xl pb-[0.25em] font-bold tracking-wide">Contact&nbsp;us</h1>
          <p className=" pb-[1em]">Get in touch with us to see how we can help you with your project</p>

          <SendForm />
        </div>
        {/* <div className="w-full h-[50vh] lg:h-[100vh]"> */}
          <iframe title="googleMaps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17082.56126707991!2d30.35079035883301!3d50.47205243685994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1708288771518!5m2!1suk!2sua"
            width="100%" height="100%" loading="lazy"  className="w-full h-[50vh] lg:h-[100vh]"></iframe>
        {/* </div> */}
      </section>
      <section className="relative md:flex justify-around p-6 md:p-12 lg:p-24 bg-main-sky text-white dark:text-black z-0">
        <Image src={"/images/bg-drop.svg"}
          alt="bg"
          fill={true}
          className="-z-10"
        />
        <Link href='tel:+380973232161'
          target='_blank'
          className="flex items-center justify-center sm:justify-start p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5">
            <path
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            />
          </svg>
          +38 (097) 3232-161</Link>

        <Link href='https://t.me/Andrew_Samoilov'
          target='_blank'
          className="flex items-center justify-center sm:justify-start p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px" width="100" height="100"
            viewBox="0 0 48 48"
            fill="currentColor"
            className="mr-3 h-5 w-5">
            <path d="M5.83,23.616c12.568-5.529,28.832-12.27,31.077-13.203c5.889-2.442,7.696-1.974,6.795,3.434 c-0.647,3.887-2.514,16.756-4.002,24.766c-0.883,4.75-2.864,5.313-5.979,3.258c-1.498-0.989-9.059-5.989-10.7-7.163 c-1.498-1.07-3.564-2.357-0.973-4.892c0.922-0.903,6.966-6.674,11.675-11.166c0.617-0.59-0.158-1.559-0.87-1.086 c-6.347,4.209-15.147,10.051-16.267,10.812c-1.692,1.149-3.317,1.676-6.234,0.838c-2.204-0.633-4.357-1.388-5.195-1.676 C1.93,26.43,2.696,24.995,5.83,23.616z"></path>
          </svg>
          @TechVibeAgancyTg</Link>
        <Link
          href='mailto:veprsag@gmail.com'
          target='_blank'
          className="flex items-center justify-center sm:justify-start p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5">
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          tech-vibe-agancy@mail</Link>
      </section>
    </main>
  );
}

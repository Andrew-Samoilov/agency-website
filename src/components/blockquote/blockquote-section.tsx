export default function BlockquoteSection({
    text, author, className
}: Readonly<{
    text: string, author: string, className?: string
}>) {
    return (
        <section className="p-6 md:p-12 lg:p-24 h-screen flex items-center justify-center">
            <blockquote
                className={` ${className}`}>
                <p className="pb-[0.5em] leading-relaxed italic">
                    {text}
                </p>
                <p className="text-right">
                    {author}
                </p>
            </blockquote>
        </section>
    );
}

export default function Blockquote({
    text, author, className
}: Readonly<{
    text: string, author: string, className?: string
}>) {
    return (
        <blockquote
            className={` ${className}`}>
            <p className="pb-[0.5em] leading-relaxed italic">
                {text}
            </p>
            <p className="text-right">
                {author}
            </p>
        </blockquote>
    );
}

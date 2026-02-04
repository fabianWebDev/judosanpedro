import Image from "next/image";

export default function SenseiCard({ name, description, image }: { name: string, description: string, image: string }) {
    return (
        <article className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-zinc-200/80 transition hover:shadow-xl hover:ring-zinc-300">
            <div className="relative aspect-square w-full overflow-hidden bg-zinc-100">
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className="object-cover object-top transition duration-300 hover:scale-105"
                />
            </div>
            <div className="p-5">
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-zinc-900">
                    {name}
                </h2>
                <p className="text-sm leading-relaxed text-zinc-600">
                    {description}
                </p>
            </div>
        </article>
    );
}
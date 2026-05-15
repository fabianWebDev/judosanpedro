import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";


export default function SocialWidget() {
    return (
        <div className="mt-2">
            <h3 className="text-2xl font-bold text-center text-zinc-950">Síguenos en nuestras redes sociales</h3>
            <p className="text-zinc-600 text-center mb-2">
                Encuentranos en las siguientes plataformas:
            </p>
            <div className="flex gap-2 justify-center">
                <Link target="_blank" href="https://www.facebook.com/...">
                    <FaFacebook size={40} className="text-primary" />
                </Link>
                <Link target="_blank" href="https://www.instagram.com/judo_san_pedro/">
                    <FaInstagram size={40} className="text-primary" />
                </Link>
            </div>
        </div>
    );
}
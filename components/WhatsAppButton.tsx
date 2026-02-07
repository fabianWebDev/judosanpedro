import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function WhatsAppButton() {
    const message = "Hola, me gustaría más información sobre las clases de judo.";
    const phone = "50688888888";
    return (
        <Link
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-primary text-white rounded-full p-3 sm:p-4 shadow-lg hover:opacity-90 transition-opacity"
        >
            <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
        </Link>
    )
}
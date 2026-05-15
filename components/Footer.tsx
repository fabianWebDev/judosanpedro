import { i18n, Locale } from "@/data/i18n";
import SocialWidget from "./SocialWidget";
import Link from "next/link";

type Props = {
    locale: Locale;
};

export default function Footer({ locale }: Props) {
    const t = i18n[locale];

    return (
        <footer className="w-full max-w-7xl mx-auto px-4">
            <hr className="h-px my-2 mb-4 bg-zinc-200 border-0" />
            <SocialWidget />
            <div className="mx-auto flex flex-col items-center justify-center px-4 py-5">
                <p className="text-xs text-zinc-600 text-center">
                    &copy; {new Date().getFullYear()} {t.footerText}
                </p>
                <p className="text-xs text-zinc-600 text-center">Desarrollado por <Link href="https://www.wizardofcode.net/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WizOfCode</Link></p>
                
            </div>
        </footer>
    )
}
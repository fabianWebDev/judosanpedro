import { i18n, Locale } from "@/data/i18n";

type Props = {
    locale: Locale;
};

export default function Footer({ locale }: Props) {
    const t = i18n[locale];

    return (
        <footer className="bg-zinc-100 border-t border-zinc-200 text-center">
            <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-5">
                <p className="text-sm text-zinc-600">
                    &copy; {new Date().getFullYear()} {t.footerText}
                </p>
            </div>
        </footer>
    )
}
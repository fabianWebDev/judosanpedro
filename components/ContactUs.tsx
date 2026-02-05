import { i18n, Locale } from "@/data/i18n";

type Props = {
    locale: Locale;
};

export default function ContactUs({ locale }: Props) {
    const t = i18n[locale];
    return (
        <section id="contact-us" className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
            <h1 className="text-3xl font-bold mb-6">{t.contactUs}</h1>
        </section>
    )
}
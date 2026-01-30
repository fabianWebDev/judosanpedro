import { i18n, Locale } from "@/data/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const t = i18n[locale as Locale];

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold">{t.home}</h1>
    </main>
  );
}
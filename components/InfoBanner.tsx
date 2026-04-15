"use client";

import Image from "next/image";
import Link from "next/link";
import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const DEFAULT_STORAGE_KEY = "judosanpedro-info-banner-dismissed";

export type InfoBannerProps = {
    imageSrc: string;
    imageAlt: string;
    cta: { label: string; href: string };
    closeLabel?: string;
    storageKey?: string;
    dialogLabel?: string;
    openDelayMs?: number;
};

export default function InfoBanner({
    imageSrc,
    imageAlt,
    cta,
    closeLabel = "Cerrar",
    storageKey = DEFAULT_STORAGE_KEY,
    dialogLabel = "Aviso",
    openDelayMs = 3000,
}: InfoBannerProps) {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            try {
                if (!localStorage.getItem(storageKey)) {
                    setOpen(true);
                }
            } catch {
                setOpen(true);
            }
        }, openDelayMs);

        return () => window.clearTimeout(timer);
    }, [storageKey, openDelayMs]);

    const dismiss = useCallback(() => {
        setOpen(false);
        try {
            localStorage.setItem(storageKey, "1");
        } catch { }
    }, [storageKey]);

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") dismiss();
        };

        window.addEventListener("keydown", onKey);

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [open, dismiss]);

    useEffect(() => {
        if (open) {
            modalRef.current?.focus();
        }
    }, [open]);

    if (!mounted || !open) return null;

    const showCta = cta.label.trim() && cta.href;

    const modal = (
        <>
            <div
                className="fixed inset-0 z-[9998]"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                onClick={dismiss}
                aria-hidden
            />
            <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none p-3">
                <div
                    ref={modalRef}
                    tabIndex={-1}
                    role="dialog"
                    aria-modal="true"
                    aria-label={dialogLabel}
                    className="relative w-full max-w-2xl rounded-lg bg-white shadow-2xl pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col p-4">
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={dismiss}
                                className=""
                                aria-label={closeLabel}
                            >
                                <IoClose className="h-16 w-16 text-zinc-600 text-2xl" />
                            </button>
                        </div>

                        <div className="relative mt-1 min-h-0 w-full max-h-[min(75vh,780px)] shrink overflow-hidden rounded-lg bg-neutral-400">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={1200}
                                height={1440}
                                className="h-auto max-h-[min(75vh,780px)] w-full object-contain object-center"
                                sizes="(max-width: 640px) 100vw, min(768px, 100vw)"
                                priority
                            />
                        </div>

                        {showCta && (
                            <Link
                                href={cta.href}
                                onClick={dismiss}
                                target="_blank"
                           className="mt-2 inline-flex self-center items-center justify-center rounded-full bg-primary py-2 px-5 text-md font-semibold text-white transition-opacity hover:opacity-95 sm:text-base"
                            >
                                {cta.label}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );

    return createPortal(modal, document.body);
}
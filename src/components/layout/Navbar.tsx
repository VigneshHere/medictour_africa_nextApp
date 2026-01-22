"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ open, setOpen }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isLanding =
        pathname === "/africa" ||
        pathname === "/uk" ||
        pathname === "/uae";

    useEffect(() => {
        if (!isLanding) return;

        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [isLanding]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);


    return (
        <>
            {/* NAVBAR */}
            <header
                className={`z-50 transition-all duration-500 ease-out
  ${isLanding && !scrolled
                        ? "absolute top-0 left-0 w-full"
                        : "sticky top-4"
                    }`}
            >
                <Container>
                    <div
                        className={`mx-auto max-w-7xl rounded-2xl 
    bg-gradient-to-r from-[#0c2e2e] to-[#0a3a3a]
    px-6 transition-shadow duration-300
    ${scrolled ? "shadow-lg" : "shadow-none"}`}
                    >
                        <div className="flex h-16 items-center justify-between">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/images/logo/logo.png"
                                    alt="Medictour"
                                    width={150}
                                    height={40}
                                    priority
                                />
                            </Link>

                            {/* Desktop Nav */}
                            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold tracking-wide text-white/95">
                                <Link href="/" className="hover:text-white">Home</Link>
                                <a href="#how-it-works" className="hover:text-white">How it works</a>
                                <a href="#care" className="hover:text-white">Care we support</a>
                                <a href="#why" className="hover:text-white">Why MedicTour</a>
                                <a href="#support" className="hover:text-white">Patient support</a>
                            </nav>

                            {/* Desktop CTA */}
                            <div className="hidden lg:flex items-center gap-4">
                                <a href="tel:+919895332222" className="text-[15px] font-semibold tracking-wide text-white/95">
                                    Call
                                </a>
                                <a
                                    href="https://wa.me/919895332222"
                                    className="rounded-full bg-green-500 px-5 py-2 text-sm font-medium text-white hover:bg-green-600"
                                >
                                    WhatsApp
                                </a>
                            </div>

                            {/* Mobile Menu */}
                            <button
                                onClick={() => setOpen(true)}
                                className="lg:hidden text-white text-xl"
                                aria-label="Open menu"
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* MOBILE BOTTOM SHEET */}
            {open && (
                <div className="fixed inset-0 z-50 bg-black/40">
                    <div className="fixed bottom-0 left-0 right-0 rounded-t-3xl bg-[#0c2e2e] px-6 pt-6 pb-8 animate-slide-up">
                        <div className="mx-auto max-w-sm flex items-center justify-between">
                            <Image
                                src="/images/logo/logo.png"
                                alt="Medictour"
                                width={130}
                                height={36}
                            />
                            <button
                                onClick={() => setOpen(false)}
                                className="text-white text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="mx-auto mt-5 h-px max-w-sm bg-white/10" />

                        <nav className="mx-auto mt-6 flex max-w-sm flex-col gap-5 text-[16px] font-semibold tracking-wide text-white">
                            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                            <a href="#how-it-works" onClick={() => setOpen(false)}>How it works</a>
                            <a href="#care" onClick={() => setOpen(false)}>Care we support</a>
                            <a href="#why" onClick={() => setOpen(false)}>Why MedicTour</a>
                            <a href="#support" onClick={() => setOpen(false)}>Patient support</a>
                        </nav>

                        <div className="mx-auto mt-8 max-w-sm">
                            <a
                                href="https://wa.me/919895332222"
                                className="block w-full rounded-full bg-green-500 py-3 text-center text-base font-semibold text-white"
                            >
                                WhatsApp for guidance
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

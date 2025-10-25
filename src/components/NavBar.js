'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-brand-white/90 backdrop-blur-md  z-50 sticky top-0">
            <div className="flex justify-between items-center px-6 md:px-12 py-3 max-w-7xl mx-auto">
                <h4 className="text-lg font-semibold">
                    <Link href="/" className="!px-0">
                        Colton Karaffa
                    </Link>
                </h4>

                <button
                    className="lg:hidden text-2xl cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                <ul className="hidden lg:flex gap-6 [&>*]:hover:brightness-250 [&>*]:transition">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/services">Services & Pricing</Link>
                    </li>
                    <li>
                        <Link href="/client-work">Client Work</Link>
                    </li>
                    <li>
                        <Link href="/personal-projects">Personal Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            {isOpen && (
                <ul className="flex flex-col gap-4 px-6 py-4 lg:hidden [&>*]:hover:brightness-250 [&>*]:transition absolute bg-brand-white w-full bottom-0 border-y-2 border-brand-off-white translate-y-[100%]">
                    <li>
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" onClick={() => setIsOpen(false)}>
                            Services & Pricing
                        </Link>
                    </li>
                    <li>
                        <Link href="/client-work" onClick={() => setIsOpen(false)}>
                            Client Work
                        </Link>
                    </li>
                    <li>
                        <Link href="/personal-projects" onClick={() => setIsOpen(false)}>
                            Personal Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}

import SvgComponent from "@/assets/CurveComponent";
import LinkedinIcon from "@/assets/linkedin-large.webp";
import GithubIcon from "@/assets/github-large.webp";
import EmailIcon from "@/assets/email-large.webp";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-off-white mt-auto mb-0 z-40">
            <SvgComponent className="w-full mt-auto z-10 max-h-12 sm:max-h-32 md:max-h-full translate-y h-full rotate-180" />
            <div className="px-6 lg:px-32 pt-8 pb-12">
                <div className="flex flex-col lg:flex-row border-b-2 border-dotted border-brand-grey pb-12 gap-12 lg:gap-0">
                    {/* Left Side: Text + Icons */}
                    <div className="flex flex-col gap-6 lg:w-3/4 items-center lg:items-baseline">
                        <p className="text-base">You're already this far,</p>
                        <h1 className="text-xl !font-bold !text-brand-grey text-center lg:text-left">
                            Let's Build Something
                        </h1>
                        <div className="flex gap-6 bg-footer-socials-bg p-footer-socials rounded-xl">
                            <Link
                                href="mailto:coltonkaraffa@gmail.com"
                                className="!p-0 hover:brightness-250"
                            >
                                <img
                                    src={EmailIcon.src}
                                    alt="email icon"
                                    className="w-auto h-auto"
                                />
                            </Link>
                            <Link
                                href="https://github.com/coltonk1"
                                className="!p-0 hover:brightness-250"
                            >
                                <img
                                    src={GithubIcon.src}
                                    alt="github icon"
                                    className="w-auto h-auto"
                                />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/coltonkaraffa"
                                className="!p-0 hover:brightness-250"
                            >
                                <img
                                    src={LinkedinIcon.src}
                                    alt="linkedin icon"
                                    className="w-auto h-auto"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Nav Links */}
                    <div className="grid grid-cols-2 gap-12 mt-4 lg:mt-0 lg:ml-auto lg:w-1/4">
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="hover:brightness-250">
                                Home
                            </Link>
                            <Link
                                href="/client-work"
                                className="hover:brightness-250"
                            >
                                Client Work
                            </Link>
                            <Link
                                href="/personal-projects"
                                className="hover:brightness-250"
                            >
                                Personal Projects
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/services"
                                className="hover:brightness-250"
                            >
                                Services & Pricing
                            </Link>
                            <Link
                                href="/contact"
                                className="hover:brightness-250"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 mt-6 text-sm text-center sm:text-left">
                    <Link href="#" className="!p-0 hover:brightness-250">
                        Copyright © 2025 <b>Colton Karaffa</b>
                    </Link>
                    <Link href="#" className="!p-0 hover:brightness-250">
                        Built by <b>yours truly</b>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

import SvgComponent from '@/assets/CurveComponent';
import LinkedinIcon from '@/assets/linkedin-large.webp';
import GithubIcon from '@/assets/github-large.webp';
import EmailIcon from '@/assets/email-large.webp';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-brand-off-white/60 to-brand-white text-brand-black/80 mt-auto z-40 border-t border-brand-off-white/60">
            <div className="px-6 lg:px-32 pt-20 pb-12 flex flex-col gap-20">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-16 border-b border-brand-off-white/80 pb-12">
                    {/* Left: About + Icons */}
                    <div className="flex flex-col gap-6 lg:w-3/5 items-center lg:items-start text-center lg:text-left">
                        <h2 className="text-2xl font-semibold tracking-tight">Colton Karaffa</h2>
                        <p className="text-brand-grey/80 max-w-md leading-relaxed">
                            Designer and developer crafting modern, performant, and brand-focused
                            websites. Based in Georgia, working with teams and businesses across
                            industries.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-6 mt-2">
                            <SocialLink
                                href="mailto:coltonkaraffa@gmail.com"
                                icon={EmailIcon.src}
                                alt="Email"
                            />
                            <SocialLink
                                href="https://github.com/coltonk1"
                                icon={GithubIcon.src}
                                alt="GitHub"
                            />
                            <SocialLink
                                href="https://linkedin.com/in/coltonkaraffa"
                                icon={LinkedinIcon.src}
                                alt="LinkedIn"
                            />
                        </div>
                    </div>

                    {/* Right: Navigation */}
                    <nav className="grid grid-cols-2 gap-10 lg:gap-16 text-sm font-medium text-brand-grey/90">
                        <div className="flex flex-col gap-3">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/client-work">Client Work</FooterLink>
                            <FooterLink href="/personal-projects">Personal Projects</FooterLink>
                        </div>
                        <div className="flex flex-col gap-3">
                            {/* <FooterLink href="/services">Services</FooterLink> */}
                            <FooterLink href="/contact">Contact</FooterLink>
                        </div>
                    </nav>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-brand-grey/70 gap-3">
                    <p>© {new Date().getFullYear()} Colton Karaffa. All rights reserved.</p>
                    <p>
                        Designed & developed by{' '}
                        <span className="text-brand-purple/80 font-medium">Colton Karaffa</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* Helper Components */

function FooterLink({ href, children }) {
    return (
        <Link href={href} className="hover:text-brand-purple/70 transition-colors duration-200">
            {children}
        </Link>
    );
}

function SocialLink({ href, icon, alt }) {
    return (
        <Link
            href={href}
            className="hover:scale-105 transition-transform duration-300 opacity-80 hover:opacity-100"
        >
            <img src={icon} alt={alt} className="w-6 h-6" loading="lazy" />
        </Link>
    );
}

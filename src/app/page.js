import Link from 'next/link';
import allData from '@/data/projects.json';

import LineSrc from '@/assets/herolines.webp';
import SitesSrc from '@/assets/3dsites.webp';
import SvgComponent from '@/assets/CurveComponent';
import PortraitSrc from '@/assets/portrait.webp';
import Button from '@/components/Button';
import ProjectPreview from '@/components/ProjectPreview';
import WorkPreview from '@/components/WorkPreview';
import TimeBasedNote from '@/components/TimeBasedNote';
import SectionBreak from '@/assets/SectionBreak';
import EyeIcon from '@/assets/eye.webp';
import UsersIcon from '@/assets/users.webp';
import WarningIcon from '@/assets/warning.webp';
import LinkedinIcon from '@/assets/linkedin.webp';
import GithubIcon from '@/assets/github.webp';
import EmailIcon from '@/assets/email.webp';
import Footer from '@/components/Footer';

// Main homepage layout for portfolio
// Contains hero, project showcases, about section, pricing, and contact CTA
export default function Home() {
    return (
        <>
            <main className="items-center flex flex-col gap-16 md:gap-24 lg:gap-40 mb-16 md:mb-24 lg:mb-40 w-full">
                <div className="w-full">
                    <HeroSection />
                    {/* Used for dynamic greeting like “Good morning” based on time */}
                    <TimeBasedNote />
                </div>
                <div className="flex flex-col items-center w-full">
                    <SoloProjects />
                    {/* Adds a subtle visual break between personal and client projects */}
                    <SectionBreak className="w-full max-h-55" />
                    <ClientWork />
                </div>
                <AboutMe />

                <ServicesOverview />
                {/* <div className="flex flex-col gap-25 md:gap-40 lg:gap-70">
                    <PricingComparison />
                    <OutdatedHurtingSales />
                    <LetsWorkTogether />
                </div> */}
            </main>
            <Footer />
        </>
    );
}

function HeroSection() {
    return (
        <section
            className="bg-gradient-to-r from-brand-purple to-brand-blue flex flex-col items-center w-full relative"
            style={{
                WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%)',
                maskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%)',
            }}
        >
            {/* subtle background pattern */}
            <div
                alt="Hero background lines"
                draggable={false}
                className="object-fill absolute select-none"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                    WebkitMaskImage:
                        'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
                    maskImage:
                        'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
                    opacity: 0.1,
                    backgroundImage: `url(${LineSrc.src})`,
                    backgroundSize: 'cover',
                }}
                aria-hidden="true"
            />

            <div className="w-full max-w-7xl px-6 md:px-12 py-16 sm:py-32 md:py-32 flex flex-col lg:flex-row gap-12 items-center z-10">
                {/* Portrait */}
                <div className="relative w-50 h-50 sm:w-65 sm:h-65 md:w-72 md:h-72 bg-gradient-to-t from-brand-off-white to-brand-white rounded-full border-4 border-brand-white overflow-hidden shadow-lg">
                    <img
                        src={PortraitSrc.src}
                        alt="Portrait of Colton Karaffa"
                        draggable={false}
                        className="object-cover absolute w-full h-full"
                    />
                </div>

                {/* Text section */}
                <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                    <p className="!text-sm tracking-wide uppercase !text-hero-color/75 text-center lg:text-left mt-4">
                        Web Design · Branding · SEO Optimization
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold !text-hero-color text-center lg:text-left">
                        Hi, I'm <b className="!text-hero-color">Colton Karaffa</b>
                    </h1>
                    <p
                        id="hero-desc"
                        className="text-lg !text-hero-color max-w-xl mx-auto md:mx-0 text-center lg:text-left leading-relaxed"
                    >
                        I build modern websites that balance creative design with strong technical
                        foundations. My work blends thoughtful branding, clean layouts, and fast,
                        SEO-optimized code.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 md:gap-4 items-center justify-center lg:justify-start">
                        <Button variant={1} href={'/client-work'} text={'Client Work'} />
                        <Button
                            variant={2}
                            href={'/personal-projects'}
                            text={'Personal Projects'}
                        />
                    </div>
                </div>
            </div>

            <SvgComponent className="w-full mt-auto z-10 max-h-12 sm:max-h-32 md:max-h-full translate-y h-full" />
            <div className="absolute -bottom-1 h-2 bg-brand-white w-full z-20"></div>
        </section>
    );
}

function SoloProjects() {
    const recentPersonalProjects = allData
        .filter((project) => project.personal === true)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4);

    return (
        <section className="w-full bg-white py-28">
            <div className="px-6 sm:px-10 lg:px-16">
                {/* Header */}
                <div className="mb-20 text-center sm:text-left max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
                        Independent Projects
                    </h2>
                    <p className="text-brand-grey text-lg leading-relaxed max-w-2xl">
                        Personal builds where I explore new frameworks, user interface systems, and
                        creative solutions. Each project is a space to test ideas, refine technical
                        craft, and design with purpose and precision.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {recentPersonalProjects.map((project, index) => (
                        <div key={index} className="group transition-all duration-500 ease-out">
                            <div className="rounded-3xl overflow-hidden bg-white shadow-[0_2px_20px_rgba(0,0,0,0.03)]">
                                <ProjectPreview data={project} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300/40 to-transparent my-28"></div>

                {/* CTA */}
                <div className="text-center space-y-4 flex flex-col items-center">
                    <p className="text-brand-grey text-base sm:text-lg">
                        Explore more of my personal experiments and full-stack builds.
                    </p>
                    <Button
                        variant={3}
                        href="/personal-projects"
                        text="View Full Project Archive"
                    />
                </div>
            </div>
        </section>
    );
}

function ClientWork() {
    const recentClientProjects = allData
        .filter((project) => project.personal === false)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4);

    return (
        <section className="w-full bg-brand-off-white/30 py-28">
            <div className="px-6 sm:px-10 lg:px-16">
                {/* Header */}
                <div className="mb-20 text-center sm:text-left max-w-7xl mx-auto ">
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
                        Client Work
                    </h2>
                    <p className="text-brand-grey text-lg leading-relaxed max-w-2xl">
                        A selection of websites and interfaces designed and developed for small
                        businesses and organizations. Each build blends design clarity with
                        performance and precision.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {recentClientProjects.map((project, index) => (
                        <div key={index} className="group transition-all duration-500 ease-out">
                            <div className="rounded-3xl overflow-hidden bg-white">
                                <ProjectPreview data={project} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300/40 to-transparent my-28"></div>

                {/* CTA */}
                <div className="text-center space-y-4 flex flex-col items-center">
                    <p className="text-brand-grey text-base sm:text-lg">
                        Explore more design and development projects across industries.
                    </p>
                    <Button variant={3} href="/client-work" text="Browse Full Portfolio" />
                </div>
            </div>
        </section>
    );
}

function AboutMe() {
    return (
        <section className="w-full bg-brand-translucent-purple flex flex-col items-center py-20 lg:py-28">
            <div className="max-w-6xl mx-6">
                <h2 className="mb-12 text-center lg:text-left text-3xl font-bold">About Me</h2>

                <div className="lg:grid lg:grid-cols-[1fr_auto] gap-12 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-10 items-center lg:items-start">
                        <p className="leading-loose text-center lg:text-left text-brand-grey max-w-2xl">
                            I'm Colton Karaffa, a full-stack developer and designer studying
                            Computer Science at the University of Georgia. I bring together visual
                            design and technical development to create websites that are both
                            elegant and high-performing.
                        </p>
                        <p className="leading-loose text-center lg:text-left text-brand-grey max-w-2xl">
                            My work combines creativity with structure. I've partnered with small
                            businesses to develop full digital identities, handling everything from
                            brand design in Figma to responsive, SEO-optimized websites built with
                            React and Next.js.
                        </p>
                        <p className="leading-loose text-center lg:text-left text-brand-grey max-w-2xl">
                            I focus on making every project clear, fast, and visually cohesive so
                            the final product communicates a message effectively and feels
                            effortless to use.
                        </p>
                        <Button variant={4} href={'/contact'} text={'Contact Me'} />
                    </div>

                    {/* Image */}
                    <div
                        className="relative hidden lg:block"
                        style={{
                            width: 500,
                            height: 500,
                        }}
                    >
                        <img
                            src={SitesSrc.src}
                            loading="lazy"
                            alt="3D preview of site designs"
                            draggable={false}
                            className="absolute w-full h-full object-contain object-top brightness-130"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

const builds = [
    {
        id: 'static',
        name: 'Static Page',
        price: '$150+ per page',
        description:
            'Ideal for landing pages, portfolios, or informational sites. Fast, lightweight, and mobile-optimized.',
        features: [
            'Custom layout & design',
            'Mobile-friendly build',
            'Optimized for speed',
            'Figma files included',
        ],
    },
    {
        id: 'dynamic',
        name: 'Dynamic Page',
        price: '$400+ per page',
        description:
            'For blogs, dashboards, booking tools, anything with logic or backend integration.',
        features: [
            'Interactive features (forms, logins, etc.)',
            'Backend integration',
            'Custom layout & mobile optimization',
            'Figma files included',
        ],
    },
];

const extras = [
    {
        id: 'design',
        name: 'Design Only',
        price: '$100+ per page',
        description:
            "This is for clients who only need the design with no development included. If I'm building your site, design files are already included at no extra charge.",
        features: [
            'Mobile-friendly design',
            'Figma files included',
            'Ideal if you already have a developer',
        ],
    },
    {
        id: 'audit',
        name: 'Site Audit',
        price: 'Free (Code Review)',
        description:
            "I'll review your site's design, performance, and user experience at no cost. If you want a full code audit too, that's part of the paid tier.",
        features: [
            'Free performance & UX report',
            'Visual and usability feedback',
            'Optional in-depth code review',
        ],
    },
    {
        id: 'support',
        name: 'Ongoing Support',
        price: '$100+/mo',
        description:
            'Best for clients who expect regular updates, larger monthly changes, or ongoing improvements. Minor one-off tweaks are usually free without a plan.',
        features: [
            'Priority edits & fixes',
            'Monthly time set aside for edits, updates, or enhancements',
            'Recommended if you make frequent or larger monthly changes',
        ],
    },
];

function PricingComparison() {
    return (
        <section className="max-w-6xl mx-6">
            <div className="text-left mb-12">
                <h2 className="mb-2">Need a Website Built?</h2>
                <p className="text-left max-w-3xl leading-relaxed">
                    I build responsive, fast-loading websites, whether you need a simple landing
                    page or a custom interactive experience. Pricing is per page and scales with
                    complexity.
                </p>
            </div>

            {/* Main Website Builds */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
                {builds.map((tier) => (
                    <Link
                        href={`services/#${tier.id}`}
                        key={tier.name}
                        className="border-2 border-brand-off-white rounded-2xl !p-6 hover:shadow-md transition hover:scale-102 cursor-pointer"
                    >
                        <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                        <p className="opacity-80 mb-4 mt-2">{tier.description}</p>
                        <ul className="text-sm space-y-2">
                            {tier.features.map((feat) => (
                                <li key={feat} className="flex items-start">
                                    <span className="!text-green-600 mr-2">✓</span>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </Link>
                ))}
                <p className="italic opacity-80 !text-xs">
                    Final pricing depends on content length and complexity.
                </p>
            </div>

            {/* Add-On Services */}
            <div className="mb-12">
                <h4 className="mb-6">Optional Add-Ons</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {extras.map((service) => (
                        <Link
                            href={`services/#${service.id}`}
                            key={service.name}
                            className="border-2 border-brand-off-white rounded-2xl !p-6 hover:shadow-md hover:scale-102 transition cursor-pointer"
                        >
                            <h3>{service.name}</h3>
                            <p className="mb-4 mt-2 opacity-80">{service.description}</p>
                            <ul className="text-sm space-y-2">
                                {service.features.map((feat) => (
                                    <li key={feat} className="flex items-start">
                                        <span className="!text-green-600 mr-2 ">✓</span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-10">
                <Button variant={4} text="Send Inquiry" href="/contact" />
            </div>
        </section>
    );
}

function PricingComparison2() {
    return (
        <section className="max-w-6xl mx-6">
            <div className="text-left mb-12">
                <h2 className="mb-2">Need a Website Built?</h2>
                <p className="text-left max-w-3xl leading-relaxed">
                    I build responsive, fast-loading websites, whether you need a simple landing
                    page or a custom interactive experience. Pricing is per page and scales with
                    complexity.
                </p>
            </div>

            {/* Main Website Builds */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
                {builds.map((tier) => (
                    <Link
                        href={`services/#${tier.id}`}
                        key={tier.name}
                        className="border-2 border-brand-off-white rounded-2xl !p-6 hover:shadow-md transition hover:scale-102 cursor-pointer"
                    >
                        <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                        <p className="mb-2">{tier.price}</p>
                        <p className="opacity-80 mb-4">{tier.description}</p>
                        <ul className="text-sm space-y-2">
                            {tier.features.map((feat) => (
                                <li key={feat} className="flex items-start">
                                    <span className="!text-green-600 mr-2">✓</span>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </Link>
                ))}
                <p className="italic opacity-80 !text-xs">
                    Final pricing depends on content length and complexity.
                </p>
            </div>
            {/* Add-On Services */}
            <div className="mb-12">
                <h4 className="mb-6">Optional Add-Ons</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {extras.map((service) => (
                        <Link
                            href={`services/#${service.id}`}
                            key={service.name}
                            className=" border-brand-off-white rounded-2xl !p-6 border-2 hover:shadow-md hover:scale-102 transition cursor-pointer"
                        >
                            <h3>{service.name}</h3>
                            <p className="mb-2">{service.price}</p>
                            <p className="mb-4 opacity-80">{service.description}</p>
                            <ul className="text-sm space-y-2">
                                {service.features.map((feat) => (
                                    <li key={feat} className="flex items-start">
                                        <span className="!text-green-600 mr-2 ">✓</span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center gap-4 mt-10">
                <Button variant={4} text="Let's Talk" href="/contact" />
                <Button variant={3} text="Learn More" href="/services" />
            </div>
        </section>
    );
}

function PricingAndServices() {
    return (
        <section className="max-w-6xl w-full flex flex-col gap-4 px-6">
            <div className="mb-8">
                <h2>Web Projects with Transparent Starting Prices.</h2>
                <p className="leading-relaxed mt-2">
                    Design, builds, audits, and ongoing support, all priced upfront, with room for
                    flexibility based on your needs.
                </p>
            </div>

            <PricingComparison />

            <div className="mt-16 flex flex-col gap-6 md:gap-4 w-full items-center">
                <p className="md:text-left text-center">
                    Want an exact quote? I'll send one after a quick chat about your goals.
                </p>
                <div className="flex md:flex-row flex-col gap-6 md:gap-4 items-center">
                    <Button variant={4} text={'Request a Custom Quote'} href="/contact" />{' '}
                    <Button variant={3} text={'View My Services'} href="/services" />
                </div>
                <p className="flex gap-1 items-center">
                    or
                    <Button variant={5} text={'learn more about my pricing ->'} href="/services" />
                </p>
            </div>
        </section>
    );
}

function OutdatedHurtingSales() {
    return (
        <section className="max-w-6xl flex flex-col gap-4 px-6">
            <div className="mb-8">
                <h2>Why Your Site Might Be Hurting Sales</h2>
                <p className="leading-relaxed mt-2">
                    Your website is often the first impression potential customers get, and it only
                    takes seconds for them to decide whether they'll stick around or leave. These
                    numbers speak for themselves:
                </p>
            </div>
            <div className="flex md:flex-row flex-col gap-8">
                <div className="rounded-2xl p-4 lg:p-8 flex-1 flex flex-col items-center gap-4 lg:gap-8 bg-linear-to-b from-brand-white to-brand-translucent-purple">
                    <img
                        src={EyeIcon.src}
                        loading="lazy"
                        alt=""
                        className="md:scale-100 scale-85"
                    />
                    <h3 className="text-center !text-2xl md:!text-3xl lg:!text-4xl">
                        0.05s. That's All You Get
                    </h3>
                    <p className="opacity-80 leading-relaxed text-center">
                        People form an opinion about your site in 50 milliseconds. Outdated design?
                        You've already lost them.
                    </p>
                </div>
                <div className="rounded-2xl p-4 md:p-8 flex-1 flex flex-col items-center gap-4 md:gap-8 bg-linear-to-b from-brand-white to-brand-translucent-purple">
                    <img
                        src={WarningIcon.src}
                        loading="lazy"
                        alt=""
                        className="md:scale-100 scale-85"
                    />
                    <h3 className="text-center !text-2xl md:!text-3xl lg:!text-4xl">
                        38% Leave Instantly
                    </h3>
                    <p className="opacity-80 leading-relaxed text-center">
                        One-third of users bounce if your layout feels clunky or old. Good design
                        keeps them reading.
                    </p>
                </div>
                <div className="rounded-2xl p-4 md:p-8 flex-1 flex flex-col items-center gap-4 md:gap-8 bg-linear-to-b from-brand-white to-brand-translucent-purple">
                    <img
                        src={UsersIcon.src}
                        loading="lazy"
                        alt=""
                        className="md:scale-100 scale-85"
                    />
                    <h3 className="text-center !text-2xl md:!text-3xl lg:!text-4xl">
                        88% Don't Come Back
                    </h3>
                    <p className="opacity-80 leading-relaxed text-center">
                        A bad first impression kills trust. Most visitors never return after a poor
                        experience.
                    </p>
                </div>
            </div>
            <p className="italic opacity-80 !text-xs">
                Source: https://www.sweor.com/firstimpressions
            </p>
            <div className="flex flex-col items-center w-full gap-4">
                <p className="mt-8 md:text-left text-center">
                    Let's make sure your site leaves the right impression.
                </p>
                <Button variant={4} text={'Get a Free Site Review'} href="/contact" />
            </div>
        </section>
    );
}

function LetsWorkTogether() {
    return (
        <section className="w-full max-w-6xl px-6 md:px-12 flex flex-col gap-6 items-center text-center">
            <div>
                <h2>Ready to Work Together?</h2>
                <p className="leading-relaxed mt-2">
                    I'm currently booking a limited number of freelance projects. If you need a
                    full-stack developer, a designer, or both, get in touch and let's talk about
                    your goals.
                </p>
            </div>
            {/* Contact Links */}
            <div className="flex flex-col lg:flex-row gap-6 w-full items-center justify-center">
                <Link
                    href="mailto:coltonkaraffa@gmail.com"
                    className="w-full lg:w-auto px-4 py-3 border-2 border-brand-purple rounded-lg !text-brand-purple !flex gap-2 items-center justify-center hover:brightness-0 hover:opacity-75 transition"
                >
                    <img
                        src={EmailIcon.src}
                        loading="lazy"
                        alt="email icon"
                        className="w-auto h-auto"
                    />
                    coltonkaraffa@gmail.com
                </Link>
                <Link
                    href="https://github.com/coltonk1"
                    className="w-full lg:w-auto px-4 py-3 border-2 border-brand-purple rounded-lg !text-brand-purple !flex gap-2 items-center justify-center hover:brightness-0 hover:opacity-75 transition"
                >
                    <img
                        src={GithubIcon.src}
                        loading="lazy"
                        alt="github icon"
                        className="w-auto h-auto"
                    />
                    github.com/coltonk1
                </Link>
                <Link
                    href="https://linkedin/in/coltonkaraffa"
                    className="w-full lg:w-auto px-4 py-3 border-2 border-brand-purple rounded-lg !text-brand-purple !flex gap-2 items-center justify-center hover:brightness-0 hover:opacity-75 transition"
                >
                    <img
                        loading="lazy"
                        src={LinkedinIcon.src}
                        alt="linkedin icon"
                        className="w-auto h-auto"
                    />
                    linkedin.com/in/coltonkaraffa
                </Link>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-2 mt-4">
                <Button variant={4} text="Contact Me" href="/contact" />
                <p className="italic opacity-80 text-xs">Typically replies within 24 hours.</p>
            </div>
        </section>
    );
}

function ServicesOverview() {
    return (
        <>
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold mb-4">What I Offer</h2>
                <p className="max-w-2xl text-brand-grey mb-12">
                    I specialize in modern web design and development, combining visual design,
                    branding, and technical performance to build websites that help brands stand
                    out.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Web Design</h3>
                        <p>
                            Clean, responsive layouts crafted in Figma and built for clarity and
                            usability.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Development</h3>
                        <p>
                            Next.js and React builds focused on SEO, speed, and seamless user
                            experience.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Branding</h3>
                        <p>
                            Logo, typography, and visual identity systems that align design and
                            purpose.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

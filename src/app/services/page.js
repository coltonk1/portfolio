const services = [
    {
        id: 'static',
        name: 'Static Page',
        price: '$150+ per page',
        description: 'Ideal for marketing pages, portfolios, and simple informational sites.',
        detail: `Every static site I build is hand-coded for performance and clarity. No templates, no WordPress, no bloated page builders.

You’re not getting a reskinned theme. You're getting a tailored, high-performance experience that looks sharp, loads fast, and feels intentional across all devices.`,
        image: '/illustrations/static-site.webp',
        features: [
            'Fully custom design & layout',
            'No frameworks or themes',
            'Optimized for performance',
            'Figma + production code included',
        ],
        faqs: [
            "What counts as a 'page'? Generally, each unique screen or scrollable section with different content/layout.",
            'How long does it take? Most single-page builds take 3-5 business days after content is finalized.',
            'Can I update the site myself? Not without a CMS, but I can provide instructions or offer ongoing support.',
            "Where is it hosted? You can use Netlify, Vercel, or your own hosting. I'll handle deployment or handoff.",
        ],
    },
    {
        id: 'dynamic',
        name: 'Dynamic Page',
        price: '$400+ per page',
        description: 'For tools like dashboards, blogs, booking systems, or portals.',
        detail: `Dynamic projects involve backend logic, user interaction, and data handling. I build these with frameworks like Next.js or SvelteKit, using serverless APIs where needed.

The result is fast, secure, and scalable, with the same attention to UX, speed, and clarity as my static builds.`,
        image: '/illustrations/dynamic-site.webp',
        features: [
            'Includes logic (forms, auth, APIs, etc.)',
            'Built with modern frameworks',
            'Data fetching optimized for speed',
            'Custom animations or transitions optional',
        ],
        faqs: [
            "What's the difference between static and dynamic? Dynamic pages include logic like forms, user accounts, or database connections.",
            'What kind of backend is used? Usually serverless functions (e.g. Supabase, Firebase, or custom APIs).',
            'Can I scale this later? Yes. Everything is built to scale. You can always add features or migrate to more infrastructure.',
            'How do we handle auth or payments? I integrate with tools like Firebase Auth or Stripe depending on your needs.',
        ],
    },
    {
        id: 'design',
        name: 'Design Only',
        price: '$100+ per page',
        description: "Need just the design? You'll get ready-to-build Figma files.",
        detail: `If you already have a developer or agency, I can design your entire site in Figma with clean, consistent components and responsive flows.

You'll get dev-ready files, structure, and layout guidance, no extra fluff or guesswork.`,
        image: '/illustrations/design-only.webp',
        features: [
            'Component-driven Figma layout',
            'Mobile-first structure',
            'Reusable design tokens',
            'Handoff support included',
        ],
        faqs: [
            'What do I receive? Fully layered Figma files, mobile and desktop layouts, and documentation if needed.',
            'Is this design system-based? Yes. I use reusable components and design tokens where applicable.',
            'Can you work with my developer? Absolutely! I structure files for easy dev handoff.',
            'Do you offer revisions? I include two rounds of design revisions in the base rate.',
        ],
    },
    {
        id: 'audit',
        name: 'Site Audit',
        price: 'Free / $200+ with code review',
        description: 'UX, performance, and structure audits to improve your site.',
        detail: `I offer a free visual audit of your site, covering layout, usability, clarity, and performance. For clients who want deeper feedback, I also offer a paid code-level audit with async video feedback.

Perfect if you're not sure what's broken or why users aren't converting.`,
        image: '/illustrations/site-audit.webp',
        features: [
            'Performance + accessibility scan',
            'Design feedback and layout tips',
            'Code review available optionally',
            'Audit delivered in PDF',
        ],
        faqs: [
            'What do you check in the free audit? I cover design consistency, mobile responsiveness, and usability.',
            "What's included in the paid audit? Code quality (React/Next.js), performance bottlenecks, and architectural feedback.",
            'How is the feedback delivered? Usually via a PDF report.',
            "Do you fix the issues too? Fixes aren't included, but I can quote and implement improvements if needed.",
        ],
    },
    {
        id: 'support',
        name: 'Ongoing Support',
        price: '$100+/mo',
        description: 'Best for clients needing frequent updates or expansion.',
        detail: `If you're planning to grow your site, push new content regularly, or want the peace of mind of having someone on-call, I offer monthly support retainers.

This includes content updates, bug fixes, and new feature work prioritized around your goals.`,
        image: '/illustrations/maintenance.webp',
        features: [
            'Monthly design/dev hours reserved',
            'Bug fixes + performance tuning',
            'Content refreshes included',
            'Faster turnaround and dedicated support',
        ],
        faqs: [
            'How does this work monthly? I block out hours for your needs, fixes, content updates, small features, etc.',
            "Is there a contract? No. it's month to month. You can pause or cancel anytime.",
            "What if I don't use all the hours? I'll carry over small overages, or reduce scope if needed.",
            "How do we communicate? Usually via email, but I'm flexible based on your workflow.",
        ],
    },
];

export default function ServicesDetailPage() {
    return (
        <section className="max-w-6xl w-full px-6 mx-auto py-20 space-y-20">
            <div className="mb-12">
                <h2>Services & Process</h2>
                <p className="leading-relaxed mt-2 text-brand-grey max-w-3xl">
                    I don't use templates, page builders, or WordPress. Every site is custom-built
                    for speed, clarity, and responsiveness, while focusing on your content and
                    goals. Below are the services I offer and how I approach each.
                </p>
            </div>

            {services.map((service, i) => (
                <div
                    key={i}
                    className="flex flex-col lg:flex-row items-start gap-8 border-b border-brand-off-white pb-16 relative"
                >
                    <div id={service.id} className="absolute -top-20"></div>
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h3 className="text-2xl font-semibold">{service.name}</h3>
                        {/* <p className="text-sm text-brand-blue font-medium">
                            {service.price}
                        </p> */}
                        <p className="text-brand-grey text-base leading-relaxed whitespace-pre-line">
                            {service.detail}
                        </p>
                        <ul className="text-sm space-y-2 pt-4">
                            {service.features.map((feat) => (
                                <li key={feat} className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 space-y-2">
                            <h4 className="font-semibold text-sm text-brand-dark">
                                Common Questions
                            </h4>
                            <ul className="text-sm list-disc list-inside text-brand-grey space-y-1">
                                {service.faqs.map((faq, i) => {
                                    return <li key={i}>{faq}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden ">
                            {/* <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover object-top"
                            /> */}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

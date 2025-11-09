import Link from 'next/link';
import EmailIcon from '@/assets/email.webp';
import GithubIcon from '@/assets/github.webp';
import LinkedinIcon from '@/assets/linkedin.webp';
import Footer from '@/components/Footer';

export default function Main() {
    return (
        <main className="bg-gradient-to-b from-brand-white to-brand-off-white/40">
            <Contact />
            <Footer />
        </main>
    );
}

function Contact() {
    return (
        <section className="max-w-5xl mx-auto px-6 md:px-8 pt-28 pb-32 flex flex-col gap-20">
            {/* Header */}
            <div className="text-center flex flex-col gap-6 items-center">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-black/90">
                    Let's Build Something Together
                </h2>
                <p className="max-w-2xl text-lg text-brand-grey/90 leading-relaxed">
                    I'm open to freelance work, collaborations, and creative projects. Whether you
                    need a website, branding help, or UI design direction, feel free to reach out,
                    I'd love to hear from you.
                </p>
                <p className="text-sm text-brand-grey/70">
                    Typically replies within{' '}
                    <span className="border-b border-brand-purple font-medium">24-48 hours</span>,
                    between{' '}
                    <span className="border-b border-brand-purple font-medium">
                        12:00-5:00 PM EST
                    </span>{' '}
                    on weekdays.
                </p>
            </div>

            {/* Contact Form */}
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-brand-off-white/60 rounded-3xl p-10 flex flex-col gap-6 transition-all duration-500"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                    <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                </p>

                <label className="flex flex-col gap-2 text-sm text-brand-black/70">
                    Your Name
                    <input
                        type="text"
                        name="name"
                        required
                        className="border border-brand-grey/50 rounded-xl px-4 py-3 text-brand-black/90 placeholder:text-brand-grey/60 focus:border-brand-purple/40 focus:ring-2 focus:ring-brand-purple/10 transition"
                        placeholder="Jane Doe"
                    />
                </label>

                <label className="flex flex-col gap-2 text-sm text-brand-black/70">
                    Your Email
                    <input
                        type="email"
                        name="email"
                        required
                        className="border border-brand-grey/50 rounded-xl px-4 py-3 text-brand-black/90 placeholder:text-brand-grey/60 focus:border-brand-purple/40 focus:ring-2 focus:ring-brand-purple/10 transition"
                        placeholder="you@example.com"
                    />
                </label>

                <label className="flex flex-col gap-2 text-sm text-brand-black/70">
                    Message
                    <textarea
                        name="message"
                        rows="5"
                        required
                        className="border border-brand-grey/50 rounded-xl px-4 py-3 text-brand-black/90 placeholder:text-brand-grey/60 focus:border-brand-purple/40 focus:ring-2 focus:ring-brand-purple/10 transition resize-none"
                        placeholder="Tell me a bit about your project..."
                    ></textarea>
                </label>

                <button
                    type="submit"
                    className="mt-4 bg-brand-purple !text-white text-base font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 active:scale-[0.99]"
                >
                    Send Message
                </button>
            </form>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-brand-off-white/70 to-transparent"></div>

            {/* Direct Contact Options */}
            <div className="text-center flex flex-col items-center gap-10">
                <p className="text-brand-grey/80 text-lg">
                    Or reach out directly, whichever you prefer.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
                    <ContactLink
                        href="mailto:coltonkaraffa@gmail.com"
                        icon={EmailIcon.src}
                        label="coltonkaraffa@gmail.com"
                    />
                    <ContactLink
                        href="https://github.com/coltonk1"
                        icon={GithubIcon.src}
                        label="github.com/coltonk1"
                    />
                    <ContactLink
                        href="https://linkedin.com/in/coltonkaraffa"
                        icon={LinkedinIcon.src}
                        label="linkedin.com/in/coltonkaraffa"
                    />
                </div>
            </div>
        </section>
    );
}

function ContactLink({ href, icon, label }) {
    return (
        <Link
            href={href}
            className="!flex items-center gap-3 px-6 py-3 border border-brand-off-white rounded-xl bg-white/50 hover:bg-white/70 hover:border-brand-purple/30 transition-all duration-300"
        >
            <img
                src={icon}
                alt=""
                loading="lazy"
                className="w-5 h-5 opacity-80 group-hover:opacity-100 transition"
            />
            <span className="!text-black/80 group-hover:text-brand-purple/80 transition w-fit">
                {label}
            </span>
        </Link>
    );
}

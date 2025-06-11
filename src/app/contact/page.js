import Link from "next/link";
import EmailIcon from "@/assets/email.webp";
import GithubIcon from "@/assets/github.webp";
import LinkedinIcon from "@/assets/linkedin.webp";
import Footer from "@/components/Footer";

export default function Main() {
    return (
        <main>
            <Contact />
            <Footer />
        </main>
    );
}

function Contact() {
    return (
        <section className="max-w-4xl mx-auto px-6 md:px-8 mt-16 mb-24 flex flex-col gap-16">
            {/* Header and Purpose */}
            <div className="text-center flex flex-col gap-4 items-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Let's Build Something Together
                </h2>
                <p className="max-w-2xl leading-relaxed">
                    I'm open to freelance work, collaboration, contract roles,
                    and interesting side projects. Whether you need a website
                    built, want help designing an interface, or just have
                    questions about my work, feel free to reach out.
                </p>
                <p className="mt-2 max-w-2xl leading-relaxed">
                    I typically check messages between <b>12:00-5:00 PM EST</b>{" "}
                    on weekdays. You'll usually hear back within 24-48 hours.
                </p>
            </div>

            {/* Netlify Contact Form */}
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="w-full flex flex-col gap-6 border border-brand-off-white rounded-2xl p-8 [&_input]:outline-0 [&_textarea]:outline-0 [&_input]:border-brand-grey [&_textarea]:border-brand-grey"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                    <label>
                        Don't fill this out if you're human:{" "}
                        <input name="bot-field" />
                    </label>
                </p>

                <label className="flex flex-col gap-1 text-sm">
                    Your Name
                    <input
                        type="text"
                        name="name"
                        required
                        className="border rounded-md px-4 py-2"
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm">
                    Your Email
                    <input
                        type="email"
                        name="email"
                        required
                        className="border rounded-md px-4 py-2"
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm">
                    Message
                    <textarea
                        name="message"
                        required
                        rows="5"
                        className="border rounded-md px-4 py-2"
                    ></textarea>
                </label>

                <button
                    type="submit"
                    className="bg-brand-purple !text-brand-white font-medium px-6 py-3 rounded-lg hover:bg-brand-grey transition cursor-pointer"
                >
                    Send Message
                </button>
            </form>

            {/* Direct Contact Options */}
            <div className="text-center flex flex-col items-center gap-6">
                <p>Or reach out directly, whichever you prefer.</p>
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
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectPreview({ data }) {
    if (!data) return;

    return (
        <Link href={`case-studies/${data.slug}` || "#"}>
            <motion.div
                className="flex flex-col gap-6 md:gap-10 items-stretch cursor-pointer group hover:[&_h3]:decoration-brand-purple"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    opacity: { duration: 0.75, ease: "easeOut" },
                    y: { duration: 0.75, ease: "easeOut" },
                    scale: { duration: 0.2, ease: "easeOut" },
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileTap={{ scale: 0.98 }}
                whileHover={{
                    scale: 1.02,
                }}
            >
                {/* Image */}
                <div className="w-full aspect-[16/9] relative rounded-sm shadow-[0_10px_20px_var(--color-brand-off-white)]">
                    <img
                        loading="lazy"
                        src={data.preview}
                        alt={`${data.title} preview`}
                        className="absolute inset-0 w-full h-full object-cover object-top rounded-sm"
                    />
                </div>

                {/* Content */}
                <div className="w-full flex flex-col justify-center space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl w-full sm:text-2xl font-semibold transition underline decoration-brand-purple lg:decoration-transparent group-hover:brightness-150">
                            {data.title}
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {data.badges?.map((tech, i) => (
                            <span
                                key={i}
                                className="text-xs border border-brand-blue !text-brand-blue px-2 py-1 rounded font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {data.personal && data.summary ? (
                        <p className="text-sm sm:text-base leading-relaxed line-clamp-3 text-brand-grey">
                            {data.summary}
                        </p>
                    ) : (
                        <div className="text-sm sm:text-base leading-relaxed text-brand-grey space-y-1">
                            {data.role && (
                                <p>
                                    <strong>Role:</strong> {data.role}
                                </p>
                            )}
                            {data.clientType && (
                                <p>
                                    <strong>Client:</strong> {data.clientType}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
        </Link>
    );
}

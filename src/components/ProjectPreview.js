'use client';

import Link from 'next/link';

export default function ProjectPreview({ data }) {
    if (!data) return null;

    return (
        <Link
            href={`/case-studies/${data.slug}`}
            className="group block cursor-pointer border border-transparent rounded-xl p-4 hover:bg-brand-off-white/30 transition-all duration-300"
        >
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                {/* Scrollable website mockup */}
                <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-md ">
                    <div className="overflow-y-scroll max-h-[500px] scrollbar-thin scrollbar-thumb-brand-purple/40 hover:scrollbar-thumb-brand-purple/60">
                        <img
                            src={data.preview}
                            alt={`${data.title} preview`}
                            className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Text content */}
                <div className="flex-1 flex flex-col justify-center space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold underline decoration-transparent group-hover:decoration-brand-purple transition-colors">
                        {data.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {data.badges?.map((tech, i) => (
                            <span
                                key={i}
                                className="text-xs  bg-brand-purple/80 !text-white px-2 py-1 rounded-full font-medium "
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

                    {data.isActive ? (
                        <p className="text-sm text-brand-purple font-medium opacity-90 group-hover:opacity-100 transition">
                            View Case Study →
                        </p>
                    ) : (
                        <p className="italic opacity-50">Case study not available</p>
                    )}
                </div>
            </div>
        </Link>
    );
}

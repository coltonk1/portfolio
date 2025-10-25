'use client';

import Link from 'next/link';

export default function ProjectPreview({ data }) {
    if (!data) return null;

    return (
        <Link href={`/case-studies/${data.slug}`} className="block group cursor-pointer">
            <div className="flex gap-6 md:gap-10 items-start">
                {/* Image preview styled like a website window */}
                <div className="relative w-full rounded-md shadow-sm h-fit">
                    {/* Browser bar mockup */}
                    {/* <div className="absolute top-0 left-0 right-0 h-7 bg-gray-100 flex items-center gap-1 px-3 border-b border-gray-200">
                        <span className="w-3 h-3 rounded-full bg-red-400"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        <span className="w-3 h-3 rounded-full bg-green-400"></span>
                        <div className="ml-3 text-[10px] text-gray-500 truncate">
                            {data.preview.replace(/^https?:\/\//, '')}
                        </div>
                    </div> */}

                    <div className="overflow-scroll max-h-150">
                        {/* Screenshot */}
                        <img
                            src={data.preview}
                            alt={`${data.title} preview`}
                            className="w-full object-cover object-top transition-transform duration-500 "
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="w-full flex flex-col justify-center space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl w-full sm:text-2xl font-semibold underline decoration-transparent group-hover:decoration-brand-purple transition">
                            {data.title}
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {data.badges?.map((tech, i) => (
                            <span
                                key={i}
                                className="text-xs border border-brand-blue text-brand-blue px-2 py-1 rounded font-medium"
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

                {!data.isActive && (
                    <p className="italic opacity-50">Case study not yet available.</p>
                )}
            </div>
        </Link>
    );
}

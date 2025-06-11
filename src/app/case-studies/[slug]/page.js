import { notFound } from "next/navigation";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import allData from "@/data/projects.json";
import Button from "@/components/Button";

export async function generateStaticParams() {
    return allData.map((project) => ({
        slug: project.slug,
    }));
}

export default async function CaseStudyPage({ params }) {
    const project = allData.find((p) => p.slug === params.slug);
    if (!project) return notFound();

    if (project.isActive === false) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <h1 className="!font-extrabold !text-brand-purple mb-4 tracking-tight">
                    🚧 Coming Soon
                </h1>
                <h2 className="mb-2 text-xl font-medium">
                    This case study is currently under construction.
                </h2>
                <p className="max-w-md mb-8 text-brand-grey">
                    I'm still polishing the write-up and assets for this
                    project. Check back soon to explore the full breakdown.
                </p>
                <Button variant={4} href="/" text="Go Home" />
            </div>
        );
    }

    return (
        <div className="relative">
            <ScrollSpyNav sections={project.sections} />
            <div className="lg:max-w-5xl xl:max-w-7xl mx-auto px-6 lg:pl-55 2xl:pl-20 py-20 space-y-20">
                <section id="section-0" className="space-y-6 scroll-mt-28">
                    <header className="space-y-4">
                        <h1 className="text-4xl font-bold border-b-2 border-brand-purple !text-brand-grey pb-2">
                            {project.title}
                        </h1>
                        <p className="text-brand-grey text-sm">
                            <strong>Role:</strong> {project.role}
                            {project.clientType && (
                                <>
                                    {" | "}
                                    <strong>Client:</strong>{" "}
                                    {project.clientType}
                                </>
                            )}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.badges.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2 py-1 rounded border border-brand-blue text-brand-blue font-medium bg-brand-blue/5"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </header>

                    {project.full_res && (
                        <div className="aspect-video rounded-xl overflow-hidden shadow-md border border-brand-off-white">
                            <img
                                src={project.full_res}
                                alt={project.title}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    )}

                    <p className="text-brand-grey text-lg leading-relaxed max-w-3xl">
                        {project.summary}
                    </p>
                </section>
                {project.sections.map((section, i) => (
                    <section
                        key={i}
                        id={`section-${i + 1}`}
                        className="space-y-6 scroll-mt-28"
                    >
                        <h2 className="text-2xl font-semibold text-brand-dark">
                            {section.heading}
                        </h2>
                        <p className="text-brand-grey whitespace-pre-wrap leading-relaxed text-base">
                            {section.body}
                        </p>

                        {section.bullets && (
                            <ul className="list-disc list-inside text-brand-grey space-y-1">
                                {section.bullets.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        )}

                        {section.images?.length > 0 && (
                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                {section.images.map((img, k) => (
                                    <div
                                        key={k}
                                        className="aspect-video rounded-lg overflow-hidden border border-brand-off-white shadow-sm flex flex-col"
                                    >
                                        <img
                                            loading="lazy"
                                            src={
                                                typeof img === "string"
                                                    ? img
                                                    : img.src
                                            }
                                            alt={`${section.heading} visual ${
                                                k + 1
                                            }`}
                                            className="w-full h-full object-cover object-top"
                                        />
                                        {typeof img === "object" &&
                                            img.label && (
                                                <p className="text-xs text-brand-grey mt-2 text-center px-2">
                                                    {img.label}
                                                </p>
                                            )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Before/After Comparisons */}
                        {section.beforeAfter?.length > 0 && (
                            <div className="space-y-6 pt-4">
                                {section.beforeAfter.map((pair, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <h4 className="text-sm font-medium text-brand-dark">
                                            {pair.label}
                                        </h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col">
                                                <img
                                                    src={pair.before}
                                                    alt={`${pair.label} - Before`}
                                                    className="w-full rounded-md border border-brand-off-white shadow-sm object-cover"
                                                />
                                                <span className="text-xs text-center text-brand-grey mt-1">
                                                    Before
                                                </span>
                                            </div>
                                            <div className="flex flex-col">
                                                <img
                                                    loading="lazy"
                                                    src={pair.after}
                                                    alt={`${pair.label} - After`}
                                                    className="w-full rounded-md border border-brand-off-white shadow-sm object-cover"
                                                />
                                                <span className="text-xs text-center text-brand-grey mt-1">
                                                    After
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                ))}

                {project.gallery?.length > 0 && (
                    <section
                        id={`section-${project.sections.length + 1}`}
                        className="space-y-6 pt-12 scroll-mt-28"
                    >
                        <h2 className="text-2xl font-semibold text-brand-dark">
                            Gallery
                        </h2>
                        <div className="flex flex-col gap-8">
                            {project.gallery.map((img, i) => {
                                const src =
                                    typeof img === "string" ? img : img.src;
                                const label =
                                    typeof img === "object" && img.label;

                                return (
                                    <div key={i} className="space-y-2">
                                        <img
                                            src={src}
                                            alt={
                                                label ||
                                                `Gallery image ${i + 1}`
                                            }
                                            className="w-full rounded-xl border border-brand-off-white shadow-sm"
                                        />
                                        {label && (
                                            <p className="text-sm text-center text-brand-grey">
                                                {label}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}

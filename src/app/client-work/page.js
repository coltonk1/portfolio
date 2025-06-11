import ProjectPreview from "@/components/ProjectPreview";
import allData from "@/data/projects.json";

export default function ClientWorkPage() {
    const recentClientProjects = allData
        .filter((project) => project.personal === false)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <section className="max-w-6xl w-full px-6 mx-auto py-20">
            <div className="mb-12">
                <h2>Client Work</h2>
                <p className="leading-relaxed mt-2 text-brand-grey">
                    Projects I've designed and/or developed for clients, focused
                    on solving real business problems with clean visuals and
                    functional UX.
                </p>
            </div>

            <div className="columns-1 md:columns-2 gap-8 space-y-8">
                {recentClientProjects.map((data, i) => (
                    <div key={i} className="break-inside-avoid">
                        <ProjectPreview data={data} />
                    </div>
                ))}
            </div>
        </section>
    );
}

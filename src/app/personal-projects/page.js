import ProjectPreview from "@/components/ProjectPreview";
import allData from "@/data/projects.json";

export default function PersonalProjectsPage() {
    const recentPersonalProjects = allData
        .filter((project) => project.personal === true)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <section className="max-w-6xl w-full px-6 mx-auto py-20">
            <div className="mb-12">
                <h2>Personal Projects</h2>
                <p className="leading-relaxed mt-2 text-brand-grey">
                    Real-world apps and tools I've built to solve my own
                    problems, experiment with new stacks, or explore product
                    ideas.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPersonalProjects.map((data, i) => (
                    <div key={i}>
                        <ProjectPreview data={data} />
                    </div>
                ))}
            </div>
        </section>
    );
}

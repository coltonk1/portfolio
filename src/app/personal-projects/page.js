import ProjectPreview from '@/components/ProjectPreview';
import allData from '@/data/projects.json';

export default function PersonalProjectsPage() {
    const recentPersonalProjects = allData
        .filter((project) => project.personal === true)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <section className="w-full px-6 mx-auto py-20">
            <div className="mb-12 max-w-6xl mx-auto">
                <h1 className="!text-brand-grey">Personal Projects</h1>
                <p className="leading-relaxed mt-2 text-brand-grey max-w-4xl">
                    Real-world projects, apps, and creative tools I’ve built to explore new
                    technologies, test ideas, and sharpen my design and development process. Each
                    one reflects my curiosity, experimentation, and focus on clean, purposeful
                    interfaces.
                </p>
            </div>

            <div className="columns-1 md:columns-2 gap-8 space-y-8">
                {recentPersonalProjects.map((data, i) => (
                    <div key={i} className="break-inside-avoid">
                        <ProjectPreview data={data} />
                    </div>
                ))}
            </div>
        </section>
    );
}

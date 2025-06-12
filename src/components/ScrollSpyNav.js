"use client";

import { useEffect, useState } from "react";

export default function ScrollSpyNav({ sections }) {
    const [progress, setProgress] = useState(0);
    const [positions, setPositions] = useState([]);

    const allSections = [
        { heading: "Overview" },
        ...sections,
        { heading: "Gallery" },
    ];

    useEffect(() => {
        const updatePositions = () => {
            const lastSection = document.getElementById(
                `section-${allSections.length - 1}`
            );
            if (!lastSection) return;

            const maxScroll = Math.max(
                lastSection.offsetTop -
                    window.innerHeight +
                    window.screen.height / 2,
                1
            );

            const newPositions = allSections.map((_, i) => {
                const el = document.getElementById(`section-${i}`);
                if (!el) return 0;

                const pos = Math.max(-2, (el.offsetTop / maxScroll) * 100 - 5);
                return i === allSections.length - 1 ? Math.min(pos, 99) : pos;
            });

            setPositions(newPositions);
        };

        const handleScroll = () => {
            const lastSection = document.getElementById(
                `section-${allSections.length - 1}`
            );
            if (!lastSection) return;

            const lastSectionTop = lastSection.offsetTop - window.innerHeight;

            const maxScroll = Math.max(
                lastSectionTop + window.screen.height / 2,
                1
            );
            const scrollTop = window.scrollY;
            const capped = Math.min(scrollTop, maxScroll);
            const percent = (capped / maxScroll) * 100;

            setProgress(percent);
        };

        requestAnimationFrame(() => {
            updatePositions();
            handleScroll();
        });

        function updateAll() {
            handleScroll();
            updatePositions();
        }

        window.addEventListener("scroll", updateAll);
        window.addEventListener("resize", updateAll);

        return () => {
            window.removeEventListener("scroll", updateAll);
            window.removeEventListener("resize", updateAll);
        };
    }, [sections]);

    return (
        <aside className="hidden lg:block fixed top-32 left-10 z-20 h-[70vh]">
            <div className="relative h-full w-8 flex items-center">
                {/* Track */}
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 rounded" />

                {/* Fill */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 w-1 bg-brand-purple rounded"
                    style={{ height: `${progress}%`, top: 0 }}
                />

                {/* Dots */}
                {positions.map((pos, i) => {
                    // Clamp gallery to 100%
                    const isLast = i === positions.length - 1;
                    const clampedPos = isLast ? Math.min(pos, 100) : pos;

                    return (
                        <button
                            key={i}
                            onClick={() =>
                                document
                                    .getElementById(`section-${i}`)
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="group absolute"
                            style={{ top: `${clampedPos}%`, left: "30%" }}
                        >
                            <div className="flex items-center gap-2 cursor-pointer">
                                <div
                                    className={`w-3 h-3 rounded-full border-2 transition ${
                                        progress >= pos
                                            ? "bg-brand-purple border-brand-purple"
                                            : "bg-white border-gray-400 group-hover:border-brand-purple"
                                    }`}
                                />
                                <span className="text-xs text-gray-600 group-hover:!text-brand-purple whitespace-nowrap">
                                    {allSections[i].heading}
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </aside>
    );
}

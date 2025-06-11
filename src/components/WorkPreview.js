import Button from "./Button";

export default function ProjectPreview({ data = mockData, full = false }) {
    return (
        <div className="flex flex-col gap-4 [&_h3]:border-b-2 [&_h3]:border-brand-purple lg:[&_h3]:border-transparent hover:[&_h3]:brightness-150 hover:[&_h3]:border-brand-purple cursor-pointer">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                <img
                    loading="lazy"
                    src={data.image.src}
                    alt={`${data.title} preview`}
                    className="absolute w-full h-full object-cover object-top rounded-xl"
                />

                <div
                    className="absolute inset-0 pointer-events-none rounded-xl  border-1 border-brand-off-white"
                    style={{
                        boxShadow: "inset 0 0 5px var(--color-brand-off-white)",
                    }}
                />
            </div>

            <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                    <h3 className="transition">{data.title}</h3>
                </div>

                <div>
                    <span className="text-xs border-1 border-brand-blue !text-brand-blue px-2 py-1 rounded font-medium">
                        {data.job_position}
                    </span>
                </div>

                <p className="text-sm text-brand-grey leading-loose line-clamp-3">
                    {data.description}
                </p>

                {/* <Button
                    variant={5}
                    text={"View Full Case Study ➔"}
                    href={"./"}
                /> */}
            </div>
        </div>
    );
}

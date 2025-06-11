import Link from "next/link";

const Button = ({ text, href, variant = 1 }) => {
    const baseClasses =
        "inline-block rounded-lg w-fit cursor-pointer transition-all duration-100 ease-in-out hover:!filter-none border-2 !font-medium";

    const variantClasses = {
        1: "bg-brand-white md:!px-14 !py-3 border-brand-white hover:border-brand-grey !text-brand-purple hover:bg-brand-grey hover:!text-brand-off-white",
        2: "border-2 border-brand-white md:!px-14 !py-3 !text-brand-white bg-[#fff2] hover:bg-brand-grey hover:border-brand-grey hover:!text-brand-off-white",
        3: "!text-brand-purple border-2 md:!px-14 !py-3 border-brand-purple hover:bg-brand-grey hover:!text-brand-off-white hover:border-brand-grey",
        4: "!text-brand-white border-2 md:!px-14 !py-3 border-brand-purple bg-brand-purple hover:bg-brand-grey hover:!text-brand-off-white hover:border-brand-grey",
        5: "!text-brand-purple !border-0 !px-0 !py-1 hover:!text-brand-grey",
    };

    return (
        <Link
            href={href}
            className={`${baseClasses} ${variantClasses[variant]}`}
        >
            {text}
        </Link>
    );
};

export default Button;

import Button from "@/components/Button";
export default function Custom404() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <h1 className="!text-7xl !font-extrabold !text-brand-purple mb-4 tracking-tight">
                404
            </h1>
            <h2 className="mb-2">This page doesn't exist.</h2>
            <p className="max-w-md mb-8">
                Either you mistyped the URL or the page has moved. Don't worry,
                you can still find your way.
            </p>
            <Button variant={4} href="/" text={"Back to Home"} />
        </div>
    );
}

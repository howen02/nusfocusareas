import FocusAreaCard from "@/components/focusAreaCard";
import { FOCUS_AREAS } from "@/constants";
import Link from "next/link";

export default async function Page() {
    return (
        <main className="flex flex-col flex-grow justify-center items-centern gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {FOCUS_AREAS.map((focusArea) => {
                    return (
                        <Link
                            key={focusArea.slug}
                            href={`focus-area/${focusArea.slug}`}
                        >
                            <FocusAreaCard title={focusArea.title} />
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}

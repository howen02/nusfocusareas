import { Card } from "@/components/ui/card";
import { FOCUS_AREAS } from "@/constants";
import Link from "next/link";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-center items-center p-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {FOCUS_AREAS.map((focusArea) => {
                    return (
                        <Link
                            key={focusArea.slug}
                            href={`/focusArea/${focusArea.slug}`}
                        >
                            <Card className="aspect-square p-4 flex justify-center items-center transform transition-transform duration-300 hover:-translate-y-1">
                                <p className="text-center text-xl">
                                    {focusArea.title}
                                </p>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}

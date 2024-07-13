import { Button } from "@/components/ui/button";
import { Calculator, LightbulbIcon, Search } from "lucide-react";
import Link from "next/link";

export default async function Home() {
    return (
        <main className="flex flex-grow justify-center items-center">
            <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
                    NUSFOCUSAREAS.com
                </h1>
                <h2 className="text-lg sm:text-xl text-slate-400">
                    Helping you choose your focus area in Computer Science
                </h2>
                <div className="flex">
                    <Link href="/focus-area">
                        <Button
                            variant={"link"}
                            className="flex items-center text-base sm:text-lg"
                        >
                            <Search className="pr-2" />
                            Explorer
                        </Button>
                    </Link>
                    <Link href="/calculator">
                        <Button
                            variant={"link"}
                            className="flex items-center text-base sm:text-lg"
                        >
                            <Calculator className="pr-2" />
                            Checker
                        </Button>
                    </Link>
                </div>
                <div className="flex items-center text-slate-400">
                    <LightbulbIcon className="p-1" />
                    <h3 className="text-sm">
                        Powered by:{" "}
                        <a
                            href={"https://api.nusmods.com/v2/"}
                            className="hover:underline"
                        >
                            NUSModsAPI v2
                        </a>
                    </h3>
                </div>
            </div>
        </main>
    );
}

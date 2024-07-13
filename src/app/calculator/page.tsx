"use client";

import ModuleCard from "@/components/moduleCard";
import ModuleTag from "@/components/moduleTag";
import { Button } from "@/components/ui/button";
import { ALL_MODULES } from "@/constants";
import { FocusArea, ModuleProps } from "@/types";
import { useState } from "react";

export default function Page() {
    const [modules, setModules] = useState<ModuleProps[]>([]);
    const [focusAreas, setFocusAreas] = useState<FocusArea[]>([]);
    const [isLoading, setLoading] = useState(false);

    const addModule = (module: ModuleProps) => {
        const moduleExists = modules.some((m) => m.code === module.code);
        if (!moduleExists && modules.length < 20) {
            setModules([...modules, module]);
        }
    };

    const removeModule = (module: ModuleProps) => {
        setModules(modules.filter((m) => m.code !== module.code));
    };

    async function checkFocusAreas(modules: ModuleProps[]) {
        setLoading(true);
        try {
            const res = await fetch("/api/check-focus-areas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ modules }),
            });
            const data = await res.json();
            setFocusAreas(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-6 max-h-screen">
            <h1 className="text-3xl font-semibold">Focus Area Calculator</h1>
            <div className="flex gap-4">
                <div className="w-1/3 flex flex-col gap-2">
                    <h2 className="text-xl">Modules</h2>
                    <div className="flex flex-col gap-4 max-h-[500px] overflow-auto">
                        {ALL_MODULES.map((m) => (
                            <ModuleCard
                                key={m.code}
                                module={m}
                                onClick={() => addModule(m)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-2/3">
                    <div className="h-1/3 flex flex-col gap-2">
                        <h2 className="text-xl">Selected Modules</h2>
                        <div className="flex gap-2 flex-wrap overflow-auto">
                            {modules.map((m) => (
                                <ModuleTag
                                    key={m.code}
                                    module={m}
                                    onClick={() => removeModule(m)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex-flex-col gap-2 h-1/3">
                        <h2 className="text-xl">Fulfilled Focus Areas</h2>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : focusAreas && focusAreas.length > 0 ? (
                            <ul className="list-disc pl-5">
                                {focusAreas.map((fa) => (
                                    <li key={fa.slug}>{fa.title}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No focus areas fulfilled</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-2">
                <button
                    className="p-2 rounded-lg border border-slate-200 hover:cursor-pointer hover:bg-slate-50 transition-colors duration-300"
                    onClick={() => checkFocusAreas(modules)}
                >
                    Check Focus Areas
                </button>
                <Button
                    variant={"destructive"}
                    onClick={() => {
                        setModules([]);
                        setFocusAreas([]);
                    }}
                >
                    Clear Modules
                </Button>
            </div>
        </div>
    );
}

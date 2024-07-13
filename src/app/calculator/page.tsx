"use client";

import ModuleSearchBar from "@/components/moduleSearchBar";
import { FOCUS_AREAS } from "@/constants";

const allModules = FOCUS_AREAS.map((fa) => {
    const primaries = fa.primaries.map((p) => {
        return {
            code: p.code,
            title: p.title,
        };
    });

    const electives = fa.electives.map((e) => {
        return {
            code: e.code,
            title: e.title,
        };
    });

    return [...primaries, ...electives];
}).flat();

export default function Page() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">Focus Area Calculator</h1>
            <ModuleSearchBar modules={allModules} showDropdown={true} />
        </div>
    );
}

import { NextResponse } from "next/server";
import { FOCUS_AREAS } from "@/constants";
import { ModuleProps } from "@/types";
import { getModuleLevel } from "@/utils/module";

export async function POST(request: Request) {
    const body = await request.json();
    const modules = body.modules as ModuleProps[];

    if (!Array.isArray(modules)) {
        return NextResponse.json(
            { message: "Invalid request body" },
            { status: 400 }
        );
    }

    if (modules.length === 0 || modules.length < 3) {
        return NextResponse.json(
            { message: "Insufficient modules provided" },
            { status: 400 }
        );
    }

    const focusAreas = FOCUS_AREAS.filter((fa) => {
        const primaryCodes = fa.primaries.map((module) => module.code);
        const atLeastThree =
            modules.filter((m) => primaryCodes.includes(m.code)).length >= 3;
        const atLeastOne4k = modules.some(
            (m) => primaryCodes.includes(m.code) && getModuleLevel(m.code) == 4
        );

        return atLeastThree && atLeastOne4k;
    });

    return NextResponse.json(focusAreas);
}

import { fetchModule } from "@/utils/module";
import { Module } from "../../../types";
import AvailableSemesters from "@/components/availableSemesters";

export default async function Page({ params }: { params: { code: string } }) {
    const code = params.code;
    const mod: Module = await fetchModule(code);

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">
                {code}: {mod.title}
            </h1>
            <AvailableSemesters semesterData={mod.semesterData} />
            <div>
                <p className="text text-slate-700">{mod.description}</p>
            </div>
            <p className="text-slate-400">More to be added soon...</p>
        </div>
    );
}

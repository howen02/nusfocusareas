import { fetchModule } from "@/utils/module";
import { Module } from "../../../types";
import AvailableSemesters from "@/components/availableSemesters";

export default async function Page({ params }: { params: { code: string } }) {
    const code = params.code;
    const mod: Module = await fetchModule(code);

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">{code}</h1>
            <AvailableSemesters semesterData={mod.semesterData} />
            <div>
                <h2 className="text-xl pb-2">{mod.title}</h2>
                <p className="text text-slate-700">{mod.description}</p>
            </div>
            <div>
                <h2 className="text-xl pb-2">Prerequesites</h2>
                <p className="text text-slate-700">{mod.prerequisite}</p>
            </div>
        </div>
    );
}

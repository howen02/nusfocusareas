import { fetchModule } from "@/utils/module";
import { Module } from "../../../types";

export default async function Page({ params }: { params: { code: string } }) {
    const code = params.code;
    const module: Module = await fetchModule(code);

    return (
        <main className="flex flex-col gap-6 min-h-screen p-24">
            <h1 className="text-3xl font-semibold">{code}</h1>
            <h2 className="text-xl">{module.title}</h2>
            <p className="text text-slate-700">{module.description}</p>
        </main>
    );
}

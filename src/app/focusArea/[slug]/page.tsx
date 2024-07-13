import ModuleSection from "@/components/moduleSection";
import { FOCUS_AREAS, MODULE_TYPES } from "@/constants";

const getFocusArea = (focusAreaSlug: string) => {
    return FOCUS_AREAS.find((fa) => fa.slug === focusAreaSlug);
};

export default async function Page({ params }: { params: { slug: string } }) {
    const focusArea = getFocusArea(params.slug);

    return (
        <main className="flex flex-col gap-6 min-h-screen p-24">
            <div>
                <h1 className="text-3xl font-semibold">{focusArea?.title}</h1>
                <p className="text-lg text-slate-700 pt-4">
                    {focusArea?.description}
                </p>
            </div>
            <ModuleSection
                focusArea={focusArea!!}
                type={MODULE_TYPES.PRIMARIES}
            />
            <ModuleSection
                focusArea={focusArea!!}
                type={MODULE_TYPES.ELECTIVES}
            />
        </main>
    );
}

import { FocusArea } from "@/types";
import ModuleCard from "./moduleCard";
import { MODULE_TYPES } from "@/constants";
import Link from "next/link";

type ModuleSectionProps = {
    focusArea: FocusArea;
    type: MODULE_TYPES;
};

const ModuleSection: React.FC<ModuleSectionProps> = ({ focusArea, type }) => {
    return (
        <div>
            <h2 className="text-2xl font-lg pb-4">
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </h2>
            <div className="gap-2 grid grid-cols-2">
                {focusArea[type].map((module) => (
                    <Link href={`/module/${module.code}`}>
                        <ModuleCard module={module} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ModuleSection;

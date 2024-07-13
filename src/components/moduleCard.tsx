import { ModuleProps } from "@/types";
import { Card, CardDescription, CardTitle } from "./ui/card";

type ModuleCardProps = {
    module: ModuleProps;
};

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
    return (
        <Card className="p-4 flex flex-col gap-2 h-full hover:bg-slate-50 transition-colors duration-300">
            <CardTitle>{module.code}</CardTitle>
            <CardDescription>{module.title}</CardDescription>
        </Card>
    );
};

export default ModuleCard;

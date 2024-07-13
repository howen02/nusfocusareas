import { ModuleProps } from "@/types";
import { Card, CardTitle } from "./ui/card";

type ModuleCardProps = {
    module: ModuleProps;
    onClick?: () => void;
};

const ModuleTag: React.FC<ModuleCardProps> = ({ module, onClick }) => {
    return (
        <Card className="p-2 hover:cursor-pointer" onClick={onClick}>
            <CardTitle className="text-lg">{module.code}</CardTitle>
        </Card>
    );
};

export default ModuleTag;

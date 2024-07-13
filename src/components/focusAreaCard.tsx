import { Card } from "./ui/card";

export default function FocusAreaCard({ title }: { title: string }) {
    return (
        <Card className="sm:aspect-square p-4 flex justify-center items-center transform transition-transform duration-300 hover:-translate-y-1">
            <p className="text-center text-xl">{title}</p>
        </Card>
    );
}

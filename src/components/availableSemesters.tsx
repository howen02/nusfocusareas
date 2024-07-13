import { SemesterData } from "@/types";

export default function AvailableSemesters({
    semesterData,
}: {
    semesterData: SemesterData[];
}) {
    const availableSemesters = semesterData.map((s) => s.semester);
    const semesters =
        availableSemesters.length === 0
            ? "Data not available"
            : availableSemesters.length === 1
            ? availableSemesters[0]
            : availableSemesters.join(" & ");

    return <h3 className="text-slate-500">Semester(s): {semesters}</h3>;
}

import { NUSMODS_API_URL } from "@/constants";

export const fetchModule = async (code: string) => {
    const res = await fetch(`${NUSMODS_API_URL}/${code}.json`);
    return res.json();
};

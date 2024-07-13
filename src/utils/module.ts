import { NUSMODS_API_URL } from "@/constants";

export const fetchModule = async (code: string) => {
    const res = await fetch(`${NUSMODS_API_URL}/${code}.json`);
    return res.json();
};

export const getModuleLevel = (moduleCode: string) => {
    const code = moduleCode.match(/\d+/);
    if (code === null) {
        throw new Error(`No digits found in module code: ${moduleCode}`);
    }
    return parseInt(code[0][0]);
};

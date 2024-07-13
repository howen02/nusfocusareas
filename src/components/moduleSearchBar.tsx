"use client";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { ModuleProps } from "@/types";

interface ModuleSearchBarProps {
    modules: ModuleProps[];
    showDropdown: boolean;
    onSearchChange?: (searchText: string) => void; // Optional prop for handling search input changes
}

export const ModuleSearchBar: React.FC<ModuleSearchBarProps> = ({
    modules,
    showDropdown,
    onSearchChange,
}) => {
    return (
        <Command
            className="rounded-lg border shadow-md"
            onClick={() => {
                showDropdown = !showDropdown;
            }}
        >
            <CommandInput
                placeholder="Search for a module..."
                // onClick={() => setIsDropdownVisible(true)}
            />
            {showDropdown && (
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup title="modules">
                        {modules.map((m) => (
                            <CommandItem
                                key={m.code}
                                className="hover:bg-slate-200"
                            >
                                {m.code} - {m.title}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            )}
        </Command>
    );
};

export default ModuleSearchBar;

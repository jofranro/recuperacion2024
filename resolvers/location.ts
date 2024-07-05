import { LocationAPIRest,CharacterAPIRest } from "../types.ts";

export const Location = {
    residents: async(parent: LocationAPIRest): Promise<Array<CharacterAPIRest>> => {
        const residents = await Promise.all(
            parent.residents.map(async (character) => {
                const char = await fetch (character);
                return char.json()
            }),
        );
        return residents;
    },
};
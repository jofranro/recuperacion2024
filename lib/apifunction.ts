import { CharacterAPIRest } from "../types.ts"

export const getCharacterAPI = async (id:string): Promise<CharacterAPIRest> => {

    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const data = await fetch(url);
    if(data.status !== 200){
        console.error("Error:", data.status, data.statusText);
        throw new Error("Error");
    }
    const response = await data.json();
    return response;
};
import { GraphQLError } from "graphql";
import { CharacterAPIRest } from "../types.ts";
import {getCharacterAPI} from "../lib/apifunction.ts";

export const Query = {
    character: async (_:unknown, args: {id:string}): Promise<CharacterAPIRest> => {
        const {id} = args;
        const character = await getCharacterAPI(id);
        if(!character){
            throw new GraphQLError("No character found");
        }
        return character;
    },
    charactersByIds: async (_:unknown, args: {ids:string}): Promise<CharacterAPIRest> => {
        const {ids} = args;
        const characters = await getCharacterAPI(ids.toString());
        if(!characters){
            throw new GraphQLError("No character found");
        }
        return characters;
    },
};
import { generate } from "random-words";
import { translateWords } from "../utils/translateWords.js";

export const generateWords = async () => {
    try{
        const word: string = generate() as string

        const translate = await translateWords(word)

        if (translate == "Erro ao buscar tradução") {
            return {message: "Erro ao buscar tradução no banco de dados."}
        }

        return {Word: word, Translate: translate}

    } catch (error){
        return {message: "erro ao gerar palavra"}
    }

}
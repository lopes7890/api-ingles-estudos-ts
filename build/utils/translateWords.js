import prismaClient from "../database/db.js";
export const translateWords = async (text) => {
    try {
        const word = await prismaClient.palavras.findFirst({
            where: { ingles: text }
        });
        if (word === null) {
            return "Erro ao buscar tradução";
        }
        return word.portugues;
    }
    catch (error) {
        console.error("Erro ao traduzir:", error);
        return "Erro ao traduzir o texto.";
    }
};

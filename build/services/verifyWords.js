export const verifyResponse = async ({ word, responseUser }) => {
    try {
        let result = {};
        if (!word || !responseUser) {
            throw new Error("Todos os campos devem estar preenchidos");
        }
        if (responseUser.toLowerCase() !== word.toLowerCase()) {
            result = { message: "Resposta errada!", correct: word };
        }
        else {
            result = { message: "Resposta certa!" };
        }
        return result;
    }
    catch (error) {
        return "Erro ao verificar resposta";
    }
};

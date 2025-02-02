import { verifyResponse } from "../services/verifyWords.js";
export const getBody = async (req, res) => {
    try {
        const { word, responseUser } = req.body;
        const response = await verifyResponse({ word, responseUser });
        if (response == "Erro ao verificar resposta") {
            return { message: "Erro na verificação" };
        }
        return response;
    }
    catch (error) {
        res.code(500).send(error);
    }
};

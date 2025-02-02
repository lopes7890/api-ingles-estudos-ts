import { FastifyRequest, FastifyReply } from "fastify";
import { verifyResponse } from "../services/verifyWords.js";

export const getBody = async (req: FastifyRequest, res: FastifyReply) => {
    try{
        const {word, responseUser} = req.body as {word: string, responseUser: string}

        const response = await verifyResponse({word, responseUser})

        if(response == "Erro ao verificar resposta"){
            return {message: "Erro na verificação"}
        }

        return response;

    } catch (error) {
        res.code(500).send(error)
    }
}
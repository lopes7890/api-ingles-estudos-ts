import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { generateWords } from "./services/generatorWords.js";
import { getBody } from "./controllers/verifyControllers.js";


export const routes = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
    fastify.get("/generate", async (req: FastifyRequest, res: FastifyReply) => {
        try{
            const result = await generateWords()
            res.send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    })

    fastify.post("/verify", async (req: FastifyRequest, res: FastifyReply) => {
        try{
            const response = await getBody(req, res)
            res.send(response)
        } catch (error) {
            res.status(500).send(error)
        }
    })
    
}
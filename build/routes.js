import { generateWords } from "./services/generatorWords.js";
import { getBody } from "./controllers/verifyControllers.js";
export const routes = async (fastify, options) => {
    fastify.get("/generate", async (req, res) => {
        try {
            const result = await generateWords();
            res.send(result);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
    fastify.post("/verify", async (req, res) => {
        try {
            const response = await getBody(req, res);
            res.send(response);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
};

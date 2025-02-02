import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes.js";

const app = fastify({logger: true});


app.register(cors)
app.register(routes)

try {
    await app.listen({port: 4090})
} catch {
    process.exit(1)
}
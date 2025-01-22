import cors from "@elysiajs/cors";
import { trpc } from "@elysiajs/trpc";
import { Elysia } from "elysia";
import { trpcAppRouter } from "./trpc";

const app = new Elysia().use(cors()).use(trpc(trpcAppRouter, { endpoint: '/trpc' })).listen(3000, () => console.log("Elysia has started on port 3000!"));
import cors from "@elysiajs/cors";
import { compile as c, trpc } from "@elysiajs/trpc";
import { initTRPC } from "@trpc/server";
import { Elysia } from "elysia";
import { z } from "zod";

const t = initTRPC.create();

const trpcAppRouter = t.router({
  ping: t.procedure
    .input(z.object({
      name: z.string(),
      meta: z.string().optional(),
    }))
    .query(({ input }) => `pong ${input.name} ${input.meta ?? ''}`),
});

export type TrpcRouter = typeof trpcAppRouter;

const app = new Elysia().use(cors()).use(trpc(trpcAppRouter, { endpoint: '/trpc' })).listen(3000, () => console.log("Elysia has started on port 3000!"));
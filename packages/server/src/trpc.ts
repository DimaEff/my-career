import { initTRPC } from "@trpc/server";
import { z } from "zod";

export const t = initTRPC.create();

export const trpcAppRouter = t.router({
  ping: t.procedure
    .input(z.object({
      name: z.string(),
      meta: z.string().optional(),
    }))
    .query(({ input }) => `pong ${input.name} ${input.meta ?? ''}`),
});

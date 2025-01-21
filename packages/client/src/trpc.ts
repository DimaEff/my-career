import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { TrpcRouter } from "../../server/src/index"

export const trpc = createTRPCProxyClient<TrpcRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

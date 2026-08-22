import { handleNegotiation } from "../src/lib/negotiate";

interface PagesContext {
  request: Request;
  env: { ASSETS: { fetch: (request: Request) => Promise<Response> } };
  next: () => Promise<Response>;
}

export async function onRequest(context: PagesContext): Promise<Response> {
  const fetchAsset = (request: Request) => {
    if (context.env?.ASSETS?.fetch) {
      return context.env.ASSETS.fetch(request);
    }
    return context.next();
  };

  return handleNegotiation(context.request, fetchAsset);
}

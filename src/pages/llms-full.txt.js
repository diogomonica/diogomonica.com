import { renderLlmsFullTxt } from "../lib/llms";

export function GET() {
  return new Response(renderLlmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

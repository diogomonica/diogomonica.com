import { aboutMarkdown, markdownResponse } from "../lib/markdown";

export function GET() {
  return markdownResponse(aboutMarkdown());
}

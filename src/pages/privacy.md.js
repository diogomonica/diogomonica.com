import { privacyMarkdown, markdownResponse } from "../lib/markdown";

export function GET() {
  return markdownResponse(privacyMarkdown());
}

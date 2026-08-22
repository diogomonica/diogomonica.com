import { homeMarkdown, markdownResponse } from "../lib/markdown";

export function GET() {
  return markdownResponse(homeMarkdown());
}

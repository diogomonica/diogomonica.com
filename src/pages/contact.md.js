import { contactMarkdown, markdownResponse } from "../lib/markdown";

export function GET() {
  return markdownResponse(contactMarkdown());
}

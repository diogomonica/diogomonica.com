import { markdownResponse, recoveryMarkdown } from "../lib/markdown";

export function GET() {
  return markdownResponse(recoveryMarkdown());
}

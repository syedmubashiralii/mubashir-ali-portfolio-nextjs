import { buildLlmsText } from "@/app/data/seo";

export function GET() {
  return new Response(buildLlmsText(), {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

/**
 * JUNO voice Worker origin allowlist.
 * Only the public GitHub Pages origin is allowed.
 * CORS is not authentication; add Cloudflare rate limiting before public promotion.
 */
const ALLOWED_ORIGIN = "https://judereyes.github.io";

export function isAllowedOrigin(origin: string | null | undefined): boolean {
  return origin === ALLOWED_ORIGIN;
}

export function forbiddenResponse(): Response {
  return new Response(JSON.stringify({ error: "Forbidden" }), {
    status: 403,
    headers: { "Content-Type": "application/json", "Vary": "Origin" }
  });
}

export function corsHeadersFor(request: Request): Record<string, string> | null {
  const origin = request.headers.get("Origin");
  if (!isAllowedOrigin(origin)) return null;
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

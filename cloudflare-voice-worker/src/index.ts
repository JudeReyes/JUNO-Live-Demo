import { handleTTS } from "./server/ttsHandler";
import { corsHeadersFor, forbiddenResponse } from "./server/originGuard";

export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      const cors = corsHeadersFor(request);
      if (!cors) return forbiddenResponse();
      if (request.method !== "GET" && request.method !== "HEAD") {
        return new Response("Method Not Allowed", { status: 405, headers: { Allow: "GET, HEAD, OPTIONS", ...cors } });
      }
      return new Response(request.method === "HEAD" ? null : JSON.stringify({
        ok: true,
        service: "JUNO GuyNeural voice",
        voice: "en-US-GuyNeural"
      }), {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...cors }
      });
    }

    if (url.pathname === "/api/speak") {
      if (request.method !== "POST" && request.method !== "OPTIONS") {
        const cors = corsHeadersFor(request);
        if (!cors) return forbiddenResponse();
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
          status: 405,
          headers: { "Content-Type": "application/json; charset=utf-8", Allow: "POST, OPTIONS", ...cors }
        });
      }
      return handleTTS(request, env as Parameters<typeof handleTTS>[1], ctx);
    }

    return new Response("Not Found", { status: 404, headers: { "Cache-Control": "no-store" } });
  }
};

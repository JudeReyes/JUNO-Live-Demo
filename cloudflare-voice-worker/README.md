# JUNO GuyNeural Voice Worker

A separate Cloudflare Worker for JUNO's English Microsoft Edge Read Aloud voice.

- Voice: `en-US-GuyNeural`
- Audio response: `audio/mpeg`
- Frontend endpoint: `POST /api/speak`
- Health endpoint: `GET /health`
- Maximum text length: 2,000 characters
- Fixed voice profile: rate `-6%`, pitch `-2Hz`, volume `+0%`
- No paid TTS API key is configured or required by this prototype.

## Deploy

From this directory:

```bash
npm install
npm run deploy
```

Or connect this GitHub repository to Cloudflare Workers Builds and set the project root to `cloudflare-voice-worker`, with install command `npm install` and deploy command `npm run deploy`.

The resulting Worker URL will be used by the JUNO frontend as `https://YOUR-WORKER.workers.dev/api/speak`.

## Test

Open the health endpoint from the JUNO GitHub Pages site (same browser origin):

```
https://YOUR-WORKER.workers.dev/health
```

A health response only confirms the Worker is deployed. A real GuyNeural synthesis test must be performed by sending a short text to `POST /api/speak` from the JUNO page and confirming that the response is non-empty `audio/mpeg`.

## Important limitations and safety

This uses Microsoft's unofficial, undocumented Edge Read Aloud service, not an official public TTS API. Microsoft may change or block it at any time. The Worker does not guarantee ongoing availability.

The origin allowlist is restricted to `https://judereyes.github.io`. CORS is not authentication: non-browser clients can forge an Origin header. Before promoting this endpoint publicly, configure a Cloudflare rate-limiting rule for this Worker. The handler also limits requests to 2,000 characters and the fixed GuyNeural voice profile.

No R2 bucket or paid storage is configured. Cloudflare account limits and any future pricing changes still apply.

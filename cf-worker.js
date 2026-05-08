/**
 * Milesnick Law — Anthropic API Proxy
 * Deploy this as a Cloudflare Worker (free tier) to enable
 * the AI intake screener on your GitHub Pages site.
 *
 * SETUP (takes about 15 minutes):
 * 1. Go to https://workers.cloudflare.com and create a free account
 * 2. Click "Create Worker"
 * 3. Replace the default code with this entire file
 * 4. Click Settings → Variables → Add variable:
 *    Name: ANTHROPIC_API_KEY
 *    Value: your Anthropic API key (from https://console.anthropic.com)
 *    Check "Encrypt"
 * 5. Click Save and Deploy
 * 6. Copy your Worker's URL (e.g. https://milesnick-intake.yourname.workers.dev)
 * 7. Paste that URL into intake.html where it says YOUR_CLOUDFLARE_WORKER_URL_HERE
 */

export default {
  async fetch(request, env) {
    /* Allow CORS from your domain */
    const allowedOrigins = [
      'https://milesnick.law',
      'https://www.milesnick.law',
      'http://localhost',
      'http://127.0.0.1'
    ];

    const origin = request.headers.get('Origin') || '';
    const corsOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

    const corsHeaders = {
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    /* Handle preflight */
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const body = await request.json();
      const { system, messages } = body;

      if (!system || !messages || !Array.isArray(messages)) {
        return new Response(JSON.stringify({ error: 'Missing system or messages' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      /* Enforce max message history to control costs */
      const maxMessages = 30;
      const trimmedMessages = messages.slice(-maxMessages);

      const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 800,
          system: system,
          messages: trimmedMessages
        })
      });

      if (!anthropicResponse.ok) {
        const err = await anthropicResponse.text();
        return new Response(JSON.stringify({ error: 'API error', detail: err }), {
          status: anthropicResponse.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      const data = await anthropicResponse.json();

      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};

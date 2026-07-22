#!/usr/bin/env node
/**
 * Hyper Intelligent — ConvertKit Webhook Relay Receiver
 * Receives ConvertKit webhook payloads via webhookrelay.com forwarding
 * and processes them through the Sales Reply Handler agent
 * 
 * Usage: node webhook-relay.js
 * Runs on localhost:3002 — webhookrelay forwards public HTTPS traffic here
 */

const http = require('http');

const PORT = 3002;
const SALES_REPLY_HANDLER_PROMPT = `ROLE: Sales Reply Handler
GOAL: Maximize conversion from every inbound email reply. Classify intent, craft the right response, close the sale or schedule a call — without requiring human intervention unless necessary.

PROJECT CONTEXT:
- Product/Service: AI Voice Agents ($500 setup / $99/mo) + Website Services ($1,000–$1,500 setup)
- Offer: Voice agent + website bundles at $250 discount
- Company: Hyper Intelligent (hyperintelligent.dev)
- From address: Scott@hyperintelligent.dev
- Phone: (231) 281-3542
- Brand voice: direct, helpful, no fluff

---

## STEP 1 — CLASSIFY THE REPLY

| Code | Intent | Signal |
| HOT | Ready to buy / wants to close | "how do I get started", "send me the link", "I want this", "where do I sign up" |
| WARM | Interested, moving down the funnel | Asking detailed questions, wants social proof, says "interesting", positive language |
| COLD | Polite reply but not moving forward | "Thanks but no thanks", "not right now", "maybe later", "interesting but..." |
| OBJECTION | Has a specific blocker | Mentions price, timing, competitor, "need to think", "not sure", "too busy" |
| TALK | Wants to speak with a human | "Can we talk?", "Call me", "Let's set up a call" |
| SPAM/JUNK | Autoreply, out of office, irrelevant | OOO notices, bounce notifications |
| UNCLASSIFIED | Ambiguous or needs context | Reply doesn't fit above |

---

## STEP 2 — RESPOND BY CLASSIFICATION

### HOT: Close fast. Remove friction.
Acknowledge → direct to next step → add one closing reason → sign off from Scott at Hyper Intelligent

### WARM: Build conviction.
Acknowledge specifically → answer questions → add social proof → reiterate result → soft close

### OBJECTION: Resolve the specific blocker.
- Price: "What if it paid for itself in month 1? Most clients save more in reclaimed time than they spend."
- Timing: "Fair enough. If you ever get curious, here's where to find us: hyperintelligent.dev"
- Competitor: "Always smart to shop around. The difference is [X]."
- "Need to think/talk to someone": "No problem — if you have any questions as you think it through, I'm here."

### TALK: Get the meeting booked.
Acknowledge → ask qualifying question → include Calendly or call direct → flag for Scott if high value

### COLD: Keep warm. Exit gracefully.
Thank → no pressure → leave door open with website link

### SPAM/JUNK: No response. Log and move on.

---

## STEP 3 — ESCALATION
Escalate to Scott (webchat) when:
- Reply contains "lawyer", "legal", "FTC", or regulatory language
- Reply is abusive or threatening
- High-value prospect is HOT and you can't confidently close
- You cannot classify the intent confidently

---

## OUTPUT FORMAT
For each reply, output:
1. Classification: [HOT/WARM/OBJECTION/TALK/COLD/SPAM/UNCLASSIFIED]
2. Subject line option (2 options, mark preferred with *)
3. Full email response (plain text, conversational, from Scott at Hyper Intelligent)
4. Escalation needed: YES/NO

---

## PRICING REFERENCE
- AI Voice Agent: $500 setup / $99/mo
- Website Refresh: $1,000 setup / $199/mo optional care
- New Website: $1,500 setup / $199/mo optional care
- Bundle (Refresh+Voice): $1,250 setup / $99/mo
- Bundle (New+Voice): $1,750 setup / $99/mo
`;

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/webhook') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        console.log('=== WEBHOOK RECEIVED ===');
        console.log(JSON.stringify(payload, null, 2));
        
        // Extract key info from ConvertKit webhook
        const event = payload.event || 'unknown';
        const subscriber = payload.subscriber || {};
        const email = subscriber.email_address || payload.email || 'unknown';
        const name = subscriber.first_name || payload.name || '';
        const reply_subject = payload.subject || '';

        console.log(`Event: ${event}`);
        console.log(`From: ${email}`);
        console.log(`Subject: ${reply_subject}`);

        // Respond to ConvertKit
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ received: true, email, event }));

        // Log for agent processing
        const logEntry = {
          timestamp: new Date().toISOString(),
          event,
          email,
          name,
          subject: reply_subject,
          payload
        };
        console.log('=== LOG FOR AGENT ===');
        console.log(JSON.stringify(logEntry, null, 2));
        
      } catch (err) {
        console.error('Error processing webhook:', err);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ received: true, error: 'processing error' }));
      }
    });
  } else if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'Hyper Sales Webhook Relay' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'not found' }));
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Hyper Sales Webhook Relay listening on http://127.0.0.1:${PORT}`);
  console.log(`Health check: http://127.0.0.1:${PORT}/health`);
  console.log(`Webhook endpoint: http://127.0.0.1:${PORT}/webhook`);
  console.log('');
  console.log('Configure webhookrelay.com to forward to:');
  console.log(`https://1c2xxxxx@webhookrelay.com/v1/webhooks/YOUR_BUCKET_ID`);
  console.log('');
  console.log('Waiting for ConvertKit webhooks...');
});

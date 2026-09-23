const SYSTEM_PROMPT = `STEP 1 — SAFETY CHECK (MANDATORY BEFORE ANY OTHER RESPONSE)

Before generating any response, evaluate whether the current user message triggers any of the following hard stops. If a hard stop applies, deliver only the specified response. Do not add sentences. Do not affirm. Do not ask a follow-up question. Do not describe any agency's jurisdiction or functions. Stop.

HARD STOP A — SENSITIVE DETAILS
Triggers when: user offers to paste names, companies, dollar amounts, account numbers, documents, patient information, billing records, or identifying details.
Response (exact): "Please save those details for the confidential consultation. This chat is for general intake only."

HARD STOP B — AWARD PERCENTAGE
Triggers when: user asks whether they qualify for a specific award percentage or whether they will receive an award.
Response (exact): "Award eligibility depends on the specific facts, the reporting pathway, and any government recovery. Rob can walk through that with you."

HARD STOP C — FINCEN DIRECT FILING
Triggers when: user asks whether to report directly to FinCEN, whether to file with FinCEN, or states they are about to contact FinCEN.
Response (exact): "Rob can walk you through where that program stands and whether filing now makes sense. The sequence matters."
Then add: the consultation link or booking path.

HARD STOP D — FINCEN DESCRIBED AS FINAL
Triggers when: any response would describe the FinCEN whistleblower program as finalized or final.
Response (exact): "FinCEN has proposed a whistleblower award framework. Rob can explain where that stands and whether it may apply to your situation."

If none of the above hard stops apply, proceed to STEP 2.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You are the confidential intake screener for Milesnick Law — the practice of Rob Milesnick, a former Assistant U.S. Attorney for the District of Oregon who selectively represents clients in False Claims Act (qui tam) whistleblower cases and employment discrimination and civil rights matters. Rob is admitted in the District of Oregon, Western District of Washington, and the Ninth Circuit Court of Appeals. He handles FCA/qui tam matters nationally and employment matters in Oregon and Washington.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — INTAKE TRACK (RUNS ONLY IF NO HARD STOP APPLIES)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHISTLEBLOWER AND GOVERNMENT FRAUD TRACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Trigger this track when the person mentions any of the following: fraud, false claims, qui tam, Medicare billing, Medicaid, VA billing, government contractor fraud, grant fraud, FinCEN, money laundering, sanctions, IRS whistleblower claims, tax fraud, suspicious transfers, retaliation for reporting, or any wrongdoing involving government money.

When this track is triggered:
- Do not evaluate legal merits.
- Do not predict outcomes.
- Ask one question at a time.
- Route appropriate visitors to a confidential case evaluation.

Use this five-phase sequence:

Phase 1 — Acknowledge and orient:
Say: "It takes courage to reach out about something like this. Before we get into details, I want to make sure we connect you with the right evaluation process. Can I ask a few general questions?"

Phase 2 — Category triage:
Ask: "In general terms, what kind of situation are you describing?"
Offer these options:
- Government health care billing, such as Medicare, Medicaid, or VA billing
- Federal contractor or grant fraud
- Tax fraud or hidden income
- Financial crimes, such as money laundering, suspicious transfers, or sanctions
- Retaliation after reporting something internally
- Something else involving government money

Phase 3 — Government money confirmation:
Ask: "Was a federal or state government program involved, meaning did government money flow through the situation in some way?"

Phase 4 — Insider knowledge confirmation:
Ask: "Do you have firsthand knowledge of this, meaning you worked there, saw it directly, or have records related to what happened?"

Phase 5 — Route to consultation:
Say: "Based on what you have shared, this sounds like something Rob would want to evaluate carefully. The next step is a confidential case evaluation. No documents are needed at this stage, just a conversation."
Then say: "Use the scheduling button below to choose a time that works for you." Do not write any URL, domain, link, placeholder, or booking path. The page displays the scheduling button automatically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHISTLEBLOWER TONE GUIDANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Whistleblower visitors may be scared, uncertain, or worried about retaliation or legal exposure. They may have sat on this information for months or years. Do not rush them. Do not pressure them. Do not suggest urgency or imply they need to act quickly. Lead with calm acknowledgment. Ask only general screening questions, one at a time. Never make them feel interrogated. Route them toward a confidential consultation as the natural next step, not as a close or a pitch.

CONDUCT AND TONE
You are warm, professional, and empathetic — but efficient. You are speaking with people who are often scared, isolated, and uncertain whether anyone will believe them. Acknowledge what they share before asking the next question. Never be clinical or transactional. Ask ONE question per turn. Never stack questions. Keep responses to 2-4 sentences. Never give legal advice. Never assess whether they have a "good case." Never provide or hint at dollar values or estimate what a case is worth. You are a professional intake screener, not a lawyer. If someone seems distressed or mentions safety concerns, address that first.

TWO CASE TRACKS
TRACK 1 — FALSE CLAIMS ACT / QUI TAM: Wide gate, deep dive. These cases are rare and potentially enormous. Missing a strong case is the worst outcome. Err heavily toward B-tier rather than C-tier. Only hard knockouts justify declining.
TRACK 2 — EMPLOYMENT AND CIVIL RIGHTS: Narrow gate, sophisticated scoring. Protected class status and what happened matter far more than salary or job title.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTAKE SEQUENCE — ALL TRACKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 1 — TRACK IDENTIFICATION (ALL)
Ask: Are you here about a potential whistleblower or False Claims Act matter, an employment discrimination or retaliation issue, or possibly both?
If unclear after their answer, ask one clarifying follow-up before assigning a track. Once track is identified, follow that track's phases exclusively.

PHASE 2 — CONTEXT (ALL TRACKS)
Ask about: their role, the organization, and a general timeline. Keep it brief — you are establishing basic facts, not taking a full statement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FCA / QUI TAM TRACK — PHASES 3–8
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FCA PHASE 3 — THE CONDUCT
Ask: What did they witness or observe? Ask them to describe, in general terms, the nature of the conduct that concerned them — what was happening with the federal funds or program. Do not encourage over-disclosure. General descriptions only at this stage. Do not advance to the next phase until you have received a substantive answer to this phase's question.

FCA PHASE 4 — FEDERAL FUNDING NEXUS
Ask: Confirm which specific federal program is involved — Medicare, Medicaid, a federal contract, a government grant, TRICARE, VA, or another federal program. Confirm their role gave them access to or knowledge of this conduct. Do not advance to the next phase until you have received a substantive answer to this phase's question.

FCA PHASE 5 — INTERNAL REPORTING
Ask: Did they report this concern to anyone — a supervisor, compliance officer, internal hotline, or government agency? What happened after they reported, if anything? This establishes retaliation and notice. Do not advance to the next phase until you have received a substantive answer to this phase's question.

FCA PHASE 6 — EVIDENCE
Ask: Do they have access to documents, records, emails, or other information that supports what they witnessed? Remind them gently: do not remove or copy anything from employer systems before speaking with an attorney. Do not advance to the next phase until you have received a substantive answer to this phase's question.

FCA PHASE 7 — LEGAL RISK FACTORS
Ask about: When did this conduct occur, or when did they first become aware of it? Have they signed any severance agreement or NDA? Is there any prior news coverage, audit, or lawsuit involving this conduct at this organization? Do not advance to the next phase until you have received a substantive answer to this phase's question.

FCA PHASE 8 — ROUTE
Apply FCA hard knockouts. If none are clearly present, err toward B-tier. Route using the routing tags below.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EMPLOYMENT / CIVIL RIGHTS TRACK — PHASES 3–8
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EMPLOYMENT PHASE 3 — THE OFFICIAL REASON
Ask: What did the employer say was the official reason for the adverse action — the termination, demotion, discipline, or other action taken against them?

EMPLOYMENT PHASE 4 — THE PIVOT (MOST IMPORTANT QUESTION)
Ask: "Setting aside what they told you officially — what does your gut tell you the real reason was?"
This is the most diagnostic question in the intake. People are highly intuitive and honest. "He just didn't like me" with no protected class hook = likely non-actionable. An answer connecting to protected status or protected activity = look harder.
DO NOT ask this question on the FCA track under any circumstances.

EMPLOYMENT PHASE 5 — PROTECTED CLASS AND ADVERSE ACTION
Ask: What protected class or protected activity is at the center of this — race, sex/gender, LGBTQ identity, national origin, religion, disability, or reporting of discrimination? Confirm the nature of the adverse action (termination, demotion, pay cut, hostile environment, etc.).

EMPLOYMENT PHASE 6 — REPORTING CHAIN
Ask: Did they report the discrimination or retaliation to anyone — a coworker, supervisor, HR, or outside agency like the EEOC or BOLI? What was the response?

EMPLOYMENT PHASE 7 — EVIDENCE AND CORROBORATION
Ask: Is there anything that documents what happened — emails, performance reviews, witness accounts, or a pattern of similar treatment of others in the same protected class?

EMPLOYMENT PHASE 8 — LEGAL RISK FACTORS
Ask about: When did the adverse action occur? Have they filed an EEOC or BOLI charge? Have they signed a severance agreement or arbitration clause? Is there a union or collective bargaining agreement involved?

EMPLOYMENT PHASE 9 — ROUTE
Apply employment routing logic. Route using the routing tags below.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
UNKNOWN / BOTH TRACKS — SPECIAL HANDLING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If the person is unsure which track applies, or their situation involves both FCA fraud and employment retaliation:

UNKNOWN PHASE 2 — CLARIFYING CONTEXT
Ask about their role and what happened generally. Listen for: (a) fraud on the government, (b) adverse employment action, or (c) both — which is common in whistleblower retaliation cases.

UNKNOWN PHASE 3 — TRACK ASSIGNMENT
Based on their answer, assign the primary track. If both apply, run the FCA track first (it has the wider gate and potentially greater stakes), then evaluate the employment retaliation angle within the FCA framework. Note: Whistleblower retaliation under the FCA is a separate and powerful claim — if they reported fraud and were fired, that is likely both tracks simultaneously.

Then continue with the appropriate track phases above.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FCA HARD KNOCKOUTS — C-TIER ONLY IF CLEARLY PRESENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. No federal money nexus — no Medicare, Medicaid, federal contract, grant, TRICARE, VA, or other federal program. State money only does not qualify.
2. Already publicly disclosed — news, audits, congressional investigations, prior lawsuits. Note: Washington has its own Medicaid FCA — federal public disclosure does not necessarily bar a state Medicaid claim. Flag for Rob.
3. First-to-file bar — another attorney has already filed a qui tam on this specific conduct.
4. Statute of limitations clearly expired — generally 6 years from violation, 10-year outer limit.
5. No evidence whatsoever — pure suspicion with no corroborating documents, records, or witnesses of any kind.
6. Retaliation only, no underlying fraud on the government. May still support employment retaliation — evaluate on that track.
7. Clear Escobar materiality failure — misrepresentation obviously would not have affected whether the government paid.
For everything else with any credible federal nexus and some information: B-tier. Let Rob evaluate it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EMPLOYMENT ROUTING LOGIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUTOMATIC B-TIER REGARDLESS OF OTHER FACTORS:
— LGBTQ identity plus adverse action: Bostock federal protection plus independent Oregon/Washington state law. Portland and Seattle juries are particularly receptive. Automatic B-tier minimum.
— Public employee plus termination or demotion: Union CBA violations, civil service rules, pension/PERS calculations, constitutional claims unavailable to private employees. Automatic B-tier.

PROTECTED CLASS ROUTING:
Strong toward A-tier: Race plus overt or shocking conduct plus any corroboration. LGBTQ plus adverse action. Sex/gender plus systematic pattern plus prior good performance. National origin plus clear adverse action.
B-tier: Implicit bias pattern plus protected class plus some evidence. Retaliation for reporting discrimination on behalf of others. Any public employee plus any protected class. Race/sex/LGBTQ plus adverse action but gaps in evidence.
C-tier signals — probe for protected class hook first: "He just didn't like me" with no protected class connection. Personality conflict or general unfairness without discriminatory motive. No protected class, no protected activity, no pattern.
IMPORTANT: A straight white male who reported discrimination against a protected class colleague may have a strong retaliation claim. Do not route C-tier based on the complainant's demographics alone — ask about protected activity first.

REPORTING CHAIN: Reported to nobody = weak notice. Coworker only = weak employer notice. Supervisor = establishes notice, supports retaliation. HR = strongest notice, clearest retaliation timeline.

STANDALONE RETALIATION: B-tier only if substantial adverse action (termination, major demotion, significant career harm). C-tier if minor and no underlying claim.

C-TIER REFERRALS: Always refer to Northwest Workers Justice Project (nwjp.org) for employment or Oregon Law Center (oregonlawcenter.org) for general matters. Always validate their experience. Always provide a concrete next step.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ABSOLUTE RULES — NEVER VIOLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOLLAR VALUE RULE: NEVER provide, suggest, estimate, or hint at dollar value. Not a range. Not a comparison. Not "cases like yours." Nothing. If asked: "That's a question Rob will be better positioned to address after a full consultation — the factors that determine case value are complex and depend on things we're still learning about your situation."

DISCLOSURE LIMITATION: When someone begins providing highly detailed or sensitive information, gently redirect: "For now, general descriptions are more helpful than specific details — a consultation is the right place to go deeper."

LEGAL CONCLUSION PROHIBITION: Never say or imply: "you have a strong case," "this is illegal," "this is fraud," "you will recover," "you should file," or "your employer violated the law." If asked directly: "That's exactly what a consultation with Rob is designed to determine — I can help assess whether your situation has the characteristics of matters this practice handles, but the legal assessment happens in the consultation."

ATTORNEY-CLIENT RELATIONSHIP: If asked whether privilege applies or an attorney-client relationship exists: "This is a preliminary screening conversation — not legal advice, and it does not create an attorney-client relationship. Full attorney-client protections apply after a conflict check and formal engagement with the firm."

AI TRANSPARENCY: If asked whether they are speaking to a person or an AI: "I'm an AI screening tool — not a lawyer. Qualifying matters are submitted for review by Rob Milesnick, who is a licensed attorney and former Assistant U.S. Attorney."

DOCUMENT WARNING: If someone mentions copying or removing documents from their employer's systems: "Before doing anything with documents from your employer's systems, please speak with an attorney first. The manner in which evidence is obtained can affect both your legal standing and your credibility."

GUT QUESTION PROHIBITION: Never ask "what does your gut tell you the real reason was" on the FCA track under any circumstances. This question belongs exclusively to EMPLOYMENT PHASE 4. Asking it during any FCA phase is a protocol violation regardless of what the person says or how the conversation flows.

GEOGRAPHY: FCA/Qui Tam — national. Employment — Oregon and Washington only. Remote employers with Oregon/Washington operations may qualify.

LANGUAGE: Respond in whatever language the user writes in. Follow their language naturally throughout, including Spanish, Vietnamese, Russian, Mandarin, Korean, Portuguese, Tagalog, and any other language.

AGE DISCRIMINATION: Do not accept standalone age discrimination cases. The ADEA "but-for" standard (Gross v. FBL Financial Services, 2009) makes age-only cases extremely difficult and outside this practice's scope. Refer to NWJP or Oregon Law Center. Exception: if age is alleged alongside race, sex, or LGBTQ discrimination, evaluate on those tracks.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROUTING TAGS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Begin your response with exactly one tag when ready to route:
[ROUTE:A] — No knockouts, strong indicators. Tell them their situation has the characteristics of a matter this practice handles. Close with exactly: "The next step is a confidential case evaluation with Rob. Use the scheduling button below to choose a time that works for you." NEVER write, invent, or reference any URL, web address, domain, email address, markdown link, bracketed placeholder (such as [link] or [booking path]), or booking path in a ROUTE:A message. The page displays the scheduling button automatically; it is the only way to book.
[ROUTE:B] — Promising but one specific gap remains. Ask the one clarifying question. Conversation continues.
[ROUTE:C] — Hard knockout clearly present or outside practice scope. Warmly decline, validate their experience, explain briefly, refer to NWJP or Oregon Law Center, provide a concrete next step.

Do not route until you have completed the relevant phases and have enough information for a confident assessment. One more clarifying question is always better than routing incorrectly.`;

const ALLOWED_ORIGINS = new Set([
  'https://milesnick.law',
  'https://www.milesnick.law',
]);

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-opus-4-5-20251101';
const MAX_TOKENS = 1024;

// ── Intake email bridge ─────────────────────────────────────────────────
// Trigger: the same condition intake.html uses to show the Calendly card,
// i.e. the screener's reply text begins with [ROUTE:A].
// (intake.html: raw.match(/^\[ROUTE:([ABC])\]\s*/) → showRoute('A') → Calendly link)
const ROUTE_A_PATTERN = /^\[ROUTE:A\]/;
const RESEND_API_URL = 'https://api.resend.com/emails';
const INTAKE_EMAIL_TO = 'rob@milesnick.law';
const INTAKE_EMAIL_FROM = 'Milesnick Law Intake <intake@milesnick.law>'; // domain must be verified in Resend
const EXTRACT_MODEL = 'claude-haiku-4-5-20251001'; // fast model for the summary block only
const EXTRACT_TIMEOUT_MS = 12000;
const EMAIL_TIMEOUT_MS = 8000;
const EMAIL_MAX_ATTEMPTS = 3;
// If every send attempt fails, write the full transcript to Worker logs so the
// intake can be recovered from the Cloudflare dashboard. Set false to log metadata only.
const LOG_TRANSCRIPT_ON_FAILURE = true;

const EXTRACT_PROMPT = `You are extracting intake details for an attorney from a screening chat transcript.
Use ONLY what the prospective client explicitly stated. Do not infer, guess, or embellish. If a field was not stated, use null.
Return ONLY a JSON object with these keys:
{
  "name": string|null,
  "email": string|null,
  "phone": string|null,
  "track": "FCA/qui tam" | "Employment/civil rights" | "Both" | "Unclear",
  "summary": string (3-6 plain sentences summarizing what the person described),
  "employer_or_entity": string|null,
  "involved_parties": string[] (names or roles of people/organizations mentioned; empty array if none),
  "jurisdiction_or_location": string|null,
  "important_dates": string[] (dates, timeframes, deadlines, filings, severance/NDA signings; empty array if none)
}`;

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.has(origin) ? origin : 'https://milesnick.law';
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders(origin) });
    }

    if (!ALLOWED_ORIGINS.has(origin)) {
      return new Response('Forbidden', { status: 403 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    const { messages, context, conversationId, issueType } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'messages array required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    const apiKey = env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    // Hard-stop intercepts — run before any Anthropic API call.
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
    if (lastUserMsg) {
      const txt = lastUserMsg.content.toLowerCase();

      // Hard Stop C — FinCEN direct filing
      if (txt.includes('fincen') && /file|report|filing|directly|should i/.test(txt)) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return new Response(JSON.stringify({
          content: [{ type: 'text', text: 'Rob can walk you through where that program stands and whether filing now makes sense. The sequence matters.' }]
        }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } });
      }

      // Hard Stop A — sensitive details offered
      if (
        (txt.includes('paste') && (txt.includes('names') || txt.includes('documents') || txt.includes('amounts'))) ||
        txt.includes('paste them here') ||
        txt.includes('send you the documents')
      ) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return new Response(JSON.stringify({
          content: [{ type: 'text', text: 'Please save those details for the confidential consultation. This chat is for general intake only.' }]
        }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } });
      }

      // Hard Stop B — award percentage
      if (
        (txt.includes('30%') || txt.includes('15%') || txt.includes('percent')) &&
        (txt.includes('award') || txt.includes('qualify'))
      ) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return new Response(JSON.stringify({
          content: [{ type: 'text', text: 'Award eligibility depends on the specific facts, the reporting pathway, and any government recovery. Rob can walk through that with you.' }]
        }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) } });
      }
    }

    const activeSystemPrompt = context === 'whistleblower'
      ? SYSTEM_PROMPT + '\n\nPAGE CONTEXT: This conversation was initiated from the whistleblower page. The visitor has already been shown this opening message: "If you have concerns about fraud involving government money, I can help you figure out whether a confidential case evaluation makes sense. What is the general nature of what you are dealing with?" Begin in the WHISTLEBLOWER AND GOVERNMENT FRAUD TRACK from the first user response. Do not ask the general track identification question.'
      : SYSTEM_PROMPT;

    let anthropicResponse;
    try {
      anthropicResponse = await fetch(ANTHROPIC_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: activeSystemPrompt,
          messages,
        }),
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Upstream request failed' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    const data = await anthropicResponse.json();

    // Intake email bridge: when the screener routes the visitor to the Calendly
    // consultation, email Rob BEFORE the response goes back to the browser.
    // notifyIntake never throws; the visitor's response is returned regardless.
    const replyText = (data && Array.isArray(data.content) && data.content[0] && data.content[0].text) || '';
    if (anthropicResponse.ok && ROUTE_A_PATTERN.test(replyText)) {
      await notifyIntake({ env, messages, replyText, conversationId, issueType, context });
    }

    return new Response(JSON.stringify(data), {
      status: anthropicResponse.status,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    });
  },
};

// ═══════════════════════════════════════════════════════════════════════
// Intake email bridge helpers
// ═══════════════════════════════════════════════════════════════════════

async function notifyIntake({ env, messages, replyText, conversationId, issueType, context }) {
  const convId = (typeof conversationId === 'string' && /^[A-Za-z0-9-]{8,64}$/.test(conversationId))
    ? conversationId
    : 'srv-' + crypto.randomUUID();
  // Full transcript = everything the browser sent + the routing reply being returned now.
  const transcript = [...messages, { role: 'assistant', content: replyText }];

  try {
    if (!env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY secret is not set');
    }

    const extracted = await extractIntakeDetails(env.ANTHROPIC_API_KEY, transcript);
    const email = buildIntakeEmail({ convId, transcript, extracted, issueType, context });

    // Idempotency key: same conversation + same transcript length = same email.
    // Makes our own retries safe (Resend will not send twice within 24h).
    const idempotencyKey = `intake-${convId}-${transcript.length}`;
    await sendWithRetry(env.RESEND_API_KEY, email, idempotencyKey);

    console.log(JSON.stringify({ event: 'intake_email_sent', conversationId: convId, turns: transcript.length }));
  } catch (err) {
    const failure = {
      event: 'INTAKE_EMAIL_FAILED',
      conversationId: convId,
      error: String(err && err.message || err),
    };
    if (LOG_TRANSCRIPT_ON_FAILURE) {
      failure.issueType = issueType || null;
      failure.transcript = transcript.map(m => ({ role: m.role, content: messageText(m) }));
    }
    console.error(JSON.stringify(failure));
  }
}

async function extractIntakeDetails(apiKey, transcript) {
  try {
    const plain = transcript
      .map(m => (m.role === 'user' ? 'PROSPECTIVE CLIENT: ' : 'SCREENER: ') + messageText(m))
      .join('\n\n');
    const res = await fetch(ANTHROPIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: EXTRACT_MODEL,
        max_tokens: 1024,
        system: EXTRACT_PROMPT,
        messages: [{ role: 'user', content: 'TRANSCRIPT:\n\n' + plain }],
      }),
      signal: AbortSignal.timeout(EXTRACT_TIMEOUT_MS),
    });
    if (!res.ok) throw new Error('extract HTTP ' + res.status);
    const out = await res.json();
    const text = (out.content && out.content[0] && out.content[0].text) || '';
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start === -1 || end <= start) throw new Error('extract returned no JSON');
    return JSON.parse(text.slice(start, end + 1));
  } catch (err) {
    // Summary is a convenience; the transcript is the record. Send without it.
    console.warn(JSON.stringify({ event: 'intake_extract_failed', error: String(err && err.message || err) }));
    return null;
  }
}

async function sendWithRetry(resendKey, email, idempotencyKey) {
  let lastErr;
  for (let attempt = 1; attempt <= EMAIL_MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(RESEND_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + resendKey,
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey,
        },
        body: JSON.stringify(email),
        signal: AbortSignal.timeout(EMAIL_TIMEOUT_MS),
      });
      if (res.ok) return;
      const detail = (await res.text()).slice(0, 500);
      lastErr = new Error(`Resend HTTP ${res.status}: ${detail}`);
      // 4xx other than 409 (concurrent) / 429 (rate limit) = config problem; retrying won't help.
      if (res.status < 500 && res.status !== 409 && res.status !== 429) break;
    } catch (err) {
      lastErr = err; // network error or timeout: retry
    }
    if (attempt < EMAIL_MAX_ATTEMPTS) await new Promise(r => setTimeout(r, 750 * attempt));
  }
  throw lastErr || new Error('Resend send failed');
}

function buildIntakeEmail({ convId, transcript, extracted, issueType, context }) {
  const when = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', dateStyle: 'full', timeStyle: 'short' }) + ' (Pacific)';
  const x = extracted || {};
  const val = v => (v === null || v === undefined || v === '' ? 'Not provided' : String(v));
  const list = a => (Array.isArray(a) && a.length ? a.join('; ') : 'Not provided');

  const fields = [
    ['Conversation ID', convId],
    ['Received', when],
    ['Routing result', 'ROUTE:A (screener routed to consultation; Calendly link shown)'],
    ['Track (AI read)', val(x.track)],
    ['Issue type selected on page', val(issueType)],
    ['Page context', val(context || 'intake page (default)')],
    ['Name', val(x.name)],
    ['Email', val(x.email)],
    ['Phone', val(x.phone)],
    ['Employer / entity', val(x.employer_or_entity)],
    ['Involved parties', list(x.involved_parties)],
    ['Jurisdiction / location', val(x.jurisdiction_or_location)],
    ['Important dates / deadlines', list(x.important_dates)],
  ];
  const summary = extracted
    ? val(x.summary)
    : 'AI summary unavailable for this intake. The complete transcript below is the record.';

  const who = m => (m.role === 'user' ? 'PROSPECTIVE CLIENT' : 'SCREENER');

  const text = [
    'NEW MILESNICK LAW INTAKE',
    '',
    ...fields.map(([k, v]) => `${k}: ${v}`),
    '',
    'SUMMARY (AI-generated; verify against transcript)',
    summary,
    '',
    'COMPLETE TRANSCRIPT',
    '',
    ...transcript.map(m => `${who(m)}:\n${messageText(m)}\n`),
  ].join('\n');

  const rows = fields.map(([k, v]) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#555;vertical-align:top;white-space:nowrap"><b>${esc(k)}</b></td><td style="padding:4px 0">${esc(v)}</td></tr>`).join('');
  const turns = transcript.map(m =>
    `<div style="margin:0 0 12px;padding:10px 12px;border-left:3px solid ${m.role === 'user' ? '#B8962E' : '#1C2936'};background:${m.role === 'user' ? '#FBF8F0' : '#F5F6F7'}">` +
    `<div style="font-size:11px;letter-spacing:.06em;color:#555;margin-bottom:4px"><b>${who(m)}</b></div>` +
    `<div style="white-space:pre-wrap">${esc(messageText(m))}</div></div>`).join('');

  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#1C2936;max-width:760px">` +
    `<h2 style="margin:0 0 12px">New Milesnick Law Intake</h2>` +
    `<table style="border-collapse:collapse;margin-bottom:16px">${rows}</table>` +
    `<h3 style="margin:16px 0 6px">Summary <span style="font-weight:normal;font-size:12px;color:#777">(AI-generated; verify against transcript)</span></h3>` +
    `<p style="margin:0 0 16px;white-space:pre-wrap">${esc(summary)}</p>` +
    `<h3 style="margin:16px 0 8px">Complete transcript</h3>${turns}</div>`;

  return {
    from: INTAKE_EMAIL_FROM,
    to: [INTAKE_EMAIL_TO],
    subject: `New Milesnick Law Intake - ${convId}`,
    text,
    html,
  };
}

function messageText(m) {
  if (typeof m.content === 'string') return m.content;
  if (Array.isArray(m.content)) return m.content.map(b => (b && b.text) || '').join('\n');
  return '';
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

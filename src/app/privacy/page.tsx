import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { CONTACT_EMAIL, EFFECTIVE_DATE } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — AnesthesiaHub",
  description:
    "How AnesthesiaHub handles your data: no accounts, minimal collection, and what happens when you use the AI Assistant.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      description={`Plain-English explanation of how AnesthesiaHub handles your data. Effective ${EFFECTIVE_DATE}.`}
    >
      <h2>The short version</h2>
      <ul>
        <li>
          <strong>No accounts, no sign-up.</strong> AnesthesiaHub does not
          ask for your name, email, or any personal identifier to use the
          Service.
        </li>
        <li>
          <strong>Bookmarks, quiz progress, and the disclaimer
          acknowledgement are stored locally on your device</strong> using
          your browser&apos;s <em>localStorage</em>. We never see them.
        </li>
        <li>
          <strong>The AI Assistant sends your messages to
          Anthropic&apos;s Claude API.</strong> Do not include protected
          health information (PHI) or anything that could identify a
          specific patient.
        </li>
        <li>
          <strong>We do not sell data.</strong> Period.
        </li>
      </ul>

      <h2>1. Information we collect</h2>
      <p>
        <strong>(a) Information you give us directly:</strong> AnesthesiaHub
        does not require registration, and we do not collect names, email
        addresses, phone numbers, or payment information from end users.
      </p>
      <p>
        <strong>(b) Information stored locally on your device:</strong> We
        use your browser&apos;s <em>localStorage</em> to remember:
      </p>
      <ul>
        <li>Whether you have acknowledged the educational-use disclaimer</li>
        <li>Bookmarks you have starred (drugs, calculators, tutorials, subspecialties, emergencies)</li>
        <li>Your question-bank progress (which questions you have attempted and your accuracy)</li>
        <li>Your preferred theme (currently fixed to dark mode)</li>
      </ul>
      <p>
        This data <strong>stays on your device</strong>. It is not
        transmitted to any server we operate. You can clear it at any time
        from your browser settings or from the in-app &quot;Clear all&quot;
        button on the Bookmarks page.
      </p>
      <p>
        <strong>(c) Information collected automatically by our hosting
        provider:</strong> Like most websites, our hosting provider (Vercel
        Inc.) automatically logs basic request information — IP address,
        user-agent string, requested URL, timestamp, and similar HTTP
        metadata — for purposes such as serving the site, preventing abuse,
        and aggregate analytics. See{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Vercel&apos;s Privacy Policy
        </a>{" "}
        for details.
      </p>

      <h2>2. The AI Assistant</h2>
      <p>
        When you use the AI Assistant, the messages you type are sent to{" "}
        <strong>Anthropic, PBC</strong> (the maker of the Claude language
        model) over a secure connection so the model can generate a
        response. Anthropic processes prompts according to its own privacy
        and usage policies; see{" "}
        <a
          href="https://www.anthropic.com/legal/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Anthropic Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://www.anthropic.com/legal/commercial-terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Commercial Terms
        </a>
        .
      </p>
      <p>
        <strong>Do not enter protected health information (PHI), patient
        names, MRNs, dates of birth, exact dates of service, or any other
        identifier</strong> into the AI Assistant. Compose prompts using
        de-identified clinical scenarios (e.g., &quot;72-year-old, 95 kg,
        severe AS for ORIF hip&quot;) rather than specific patient
        information. You are responsible for ensuring that anything you
        submit complies with HIPAA and your institution&apos;s data-handling
        policies.
      </p>
      <p>
        AnesthesiaHub does not retain a copy of your AI conversations on
        its own servers. Conversations live only in your browser session
        and are cleared when you click &quot;Clear&quot; or close the page.
      </p>

      <h2>3. Cookies and tracking</h2>
      <p>
        AnesthesiaHub does not set advertising or tracking cookies. We do
        use <em>localStorage</em> (described above) which is technically not
        a cookie, but a similar local-storage mechanism. We do not embed
        third-party advertising networks.
      </p>

      <h2>4. Third-party services we rely on</h2>
      <ul>
        <li>
          <strong>Vercel</strong> — hosting and content delivery
        </li>
        <li>
          <strong>Anthropic</strong> — large-language-model API for the AI
          Assistant
        </li>
        <li>
          <strong>Linked references</strong> — citations on the site link
          out to publishers, PubMed, society websites, and similar; those
          sites have their own privacy policies
        </li>
      </ul>

      <h2>5. Children</h2>
      <p>
        AnesthesiaHub is intended for medical professionals and trainees
        (typically 18 or older). The Service is not directed at children
        under 13 and we do not knowingly collect any information from
        anyone under 13.
      </p>

      <h2>6. Security</h2>
      <p>
        We serve the Service over HTTPS and rely on reputable infrastructure
        providers. However, no method of transmission over the Internet or
        electronic storage is 100% secure, and we cannot guarantee absolute
        security. Because we do not collect accounts or personal
        information, the risk of a personal data breach on our side is
        minimized by design.
      </p>

      <h2>7. Your choices and rights</h2>
      <ul>
        <li>
          <strong>Clear local data:</strong> Use your browser&apos;s
          &quot;clear site data&quot; option, or the &quot;Clear all&quot;
          button on the Bookmarks page.
        </li>
        <li>
          <strong>Withdraw acknowledgement:</strong> Clear site data to be
          shown the disclaimer modal again on next visit.
        </li>
        <li>
          <strong>Avoid the AI Assistant:</strong> If you do not want
          messages sent to a third-party LLM provider, simply do not use
          that feature; the rest of the Service operates entirely from your
          browser.
        </li>
        <li>
          <strong>EU / UK / California residents</strong> have rights under
          GDPR, UK GDPR, and CCPA respectively. Because we do not collect
          personal information about you that would let us identify you,
          most of these rights (access, deletion of personal data) do not
          have data to act on. If you believe we hold information about
          you, contact us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-primary hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </li>
      </ul>

      <h2>8. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material
        changes will be reflected by an updated effective date at the top
        of this page and may be surfaced through the on-site disclaimer
        modal. Continued use after a change constitutes acceptance.
      </p>

      <h2>9. Contact</h2>
      <p>
        Privacy questions or requests? Email{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-primary hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalShell>
  );
}

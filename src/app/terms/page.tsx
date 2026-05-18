import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { CONTACT_EMAIL, EFFECTIVE_DATE } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service — AnesthesiaHub",
  description:
    "Terms governing your use of AnesthesiaHub, an educational reference for anesthesia trainees and clinicians.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      description={`These terms govern your use of AnesthesiaHub. By using the site you agree to them. Effective ${EFFECTIVE_DATE}.`}
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using AnesthesiaHub (the &quot;Service&quot;), you
        agree to be bound by these Terms of Service and our{" "}
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>
        . If you do not agree, do not use the Service. The first time you
        visit the site you will be asked to acknowledge an educational-use
        disclaimer; clicking &quot;I understand — continue&quot; constitutes
        acceptance of these Terms and the Privacy Policy.
      </p>

      <h2>2. Educational Purpose Only — Not Medical Advice</h2>
      <p>
        AnesthesiaHub is an <strong>educational reference</strong> intended
        for medical trainees, anesthesia residents, and clinicians. It is{" "}
        <strong>not</strong> a substitute for professional clinical
        judgment, training, supervision, or established institutional
        protocols. Nothing on the Service is intended to diagnose, treat,
        cure, or prevent any condition in any individual patient.
      </p>
      <p>
        You agree that you will <strong>not</strong> rely on AnesthesiaHub
        as the sole basis for any patient-care decision. Every dose,
        formula, calculator output, drug entry, subspecialty primer, AI
        response, emergency card, and tutorial chapter must be verified
        against primary sources (package inserts, peer-reviewed literature,
        current society guidelines such as ASA / ASRA / SOAP / MHAUS) and
        the practices of your own institution before being applied to a
        patient.
      </p>

      <h2>3. AI Assistant Disclaimer</h2>
      <p>
        The AI Assistant feature uses a large language model (currently
        Anthropic&apos;s Claude). Large language models can produce output
        that is <strong>inaccurate, incomplete, outdated, or fabricated</strong>,
        including incorrect drug doses, citations, or recommendations. AI
        output is intended for brainstorming and learning only and must be
        independently verified before clinical use. You assume all risk
        arising from your interpretation and use of AI responses.
      </p>

      <h2>4. User Conduct and Responsibilities</h2>
      <ul>
        <li>
          You will use the Service in compliance with all applicable laws
          and the policies of your institution and licensing bodies.
        </li>
        <li>
          You will not submit personally identifiable patient information
          (PHI), protected health information, or any data that would
          violate HIPAA or equivalent privacy laws, into the AI Assistant
          or anywhere else on the Service. You are solely responsible for
          any data you input.
        </li>
        <li>
          You will not attempt to reverse-engineer, scrape, overload, or
          interfere with the Service or any of its underlying providers.
        </li>
        <li>
          You will not present output from this Service as authoritative
          medical advice to patients or other users.
        </li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        Original content on AnesthesiaHub — design, code, structure,
        editorial summaries, and the assembled curriculum — is owned by the
        operator of the Service. Third-party clinical content (e.g.,
        excerpts adapted from publicly available educational materials such
        as the Stanford CA-1 Tutorial Textbook) is reproduced for
        educational purposes with attribution; rights remain with their
        respective owners. You may view, download, and print content for
        personal, non-commercial educational use. Redistribution,
        commercial use, or training of AI systems on the Service&apos;s
        content without express permission is prohibited.
      </p>

      <h2>6. References and Third-Party Content</h2>
      <p>
        Citations on the Service direct you to canonical anesthesia
        textbooks, journal articles, and society guidelines. AnesthesiaHub
        does not control and is not responsible for the content of any
        linked third-party site (including PubMed, society websites, or
        publisher pages). Links are provided for your convenience and
        further study.
      </p>

      <h2>7. No Warranty</h2>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
        AVAILABLE,&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
        We disclaim all warranties including merchantability, fitness for a
        particular purpose, non-infringement, accuracy, completeness, and
        timeliness of any content.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE
        OPERATORS, EDITORS, CONTRIBUTORS, OR HOSTING PROVIDERS OF
        ANESTHESIAHUB BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL,
        SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES, OR ANY DAMAGES FOR LOST
        PROFITS, LOST DATA, OR PERSONAL INJURY, ARISING FROM OR RELATED TO
        YOUR USE OF (OR INABILITY TO USE) THE SERVICE — INCLUDING ANY
        CLAIMS ARISING FROM PATIENT-CARE DECISIONS MADE WITH REFERENCE TO
        THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion or limitation of
        certain damages; in those jurisdictions our liability is limited to
        the maximum extent permitted by law.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless AnesthesiaHub and its
        operators, editors, contributors, and hosting providers from any
        claim, loss, or expense (including reasonable attorneys&apos; fees)
        arising out of your use of the Service or violation of these
        Terms.
      </p>

      <h2>10. Modifications</h2>
      <p>
        We may update these Terms from time to time. Material changes will
        be reflected by an updated effective date at the top of this page
        and may be surfaced through the on-site disclaimer modal. Continued
        use of the Service after a change constitutes acceptance of the
        updated Terms.
      </p>

      <h2>11. Termination</h2>
      <p>
        We may suspend or terminate the Service or your access to it at any
        time without notice for any reason, including suspected violation
        of these Terms.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the operator&apos;s
        jurisdiction (without regard to conflict-of-laws rules). Any
        dispute will be resolved in courts of competent jurisdiction in
        that location, unless a controlling consumer-protection law of your
        state or country provides otherwise.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions or concerns? Email{" "}
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

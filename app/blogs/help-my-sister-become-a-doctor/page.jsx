import Link from "next/link";
import "./fundraising-article.css";
import "./lola-gallery.css";
import LolaPhotoGallery from "./LolaPhotoGallery";

const profile = "https://agent.omogiwa.com/lola-profile.jpg";
const invoice = "https://agent.omogiwa.com/lola-invoice.pdf";
const university = "https://gregoryuniversityuturu.edu.ng";
const donationUrl = "https://paystack.shop/pay/help-lola";
const meetingUrl = "mailto:hello@omogiwa.com?subject=Arrange%20a%20conversation%20about%20Lola";

export const metadata = {
  title: "Help My Sister Become the Doctor She Has Always Dreamed of Being",
  description: "A brother's urgent appeal to help a third-year medical student continue her education. Target: ₦3,600,000 (approximately US$2,680). Any amount helps.",
  alternates: { canonical: "https://omogiwa.com/blogs/help-my-sister-become-a-doctor" },
};

export default function HelpMySisterArticle() {
  return <main className="fundraising-page"><article className="fundraising-article">
    <Link className="fundraising-back" href="/blogs">← Back to articles</Link>
    <header className="fundraising-hero">
      <p className="fundraising-eyebrow">A family appeal · Education &amp; hope</p>
      <h1>Help My Sister Become the Doctor She Has Always Dreamed of Being</h1>
      <p className="fundraising-deck">I am asking for help not because we has stopped fighting, but because we have reached a point where hard work alone cannot cover the cost of keeping a dream alive.</p>
      <p className="fundraising-byline">Written by Omogbolahan Giwa </p>
      <div className="fundraising-target"><div><span>FUNDRAISING TARGET</span><strong>₦3,600,000</strong><small>Approximately $2,680*</small></div><div><span>URGENT DEADLINE</span><strong>About two weeks</strong><small>To pay outstanding fees and reduce the risk of admission cancellation.</small></div></div>
      <div className="fundraising-actions"><a className="fundraising-button fundraising-button-primary" href={donationUrl}>Make a free donation</a><a className="fundraising-button fundraising-button-secondary" href="mailto:hello@omogiwa.com?subject=Professional%20services%20to%20support%20Lola">Pay and request for my services</a></div>
      <p className="fundraising-small-note">Every amount matters. If all you can give is $1, that is still help and is deeply appreciated.</p>
      <p className="fundraising-exchange-note">*USD equivalent is an estimate and varies with the exchange rate. </p>
    </header>
    <figure className="fundraising-profile"><img src={profile} alt="Lola, the medical student this appeal is supporting"/><figcaption>Omolola is a third-year medical student working towards her lifelong dream of becoming a doctor.</figcaption></figure>
    <LolaPhotoGallery />
    <div className="fundraising-body">
      <p className="fundraising-opening">Dear kind stranger, friend, or someone who may be able to help,</p>
      <p>My name is Omogbolahan Giwa. I am a multidisciplinary designer and software engineer. Today, I am writing as a brother who desperately wants to see his sister become the woman she has always dreamed of becoming.</p>
      <p>My sister, Lola, is a third-year medical student at Gregory University Uturu. Becoming a doctor has been her dream for years. She has worked hard to get this far, and the thought of her education being interrupted because we cannot raise the fees in time is difficult to accept.</p>
      <p>A few years ago, we lost our mother. Since then, our father has carried the responsibility of supporting us and keeping our future within reach. He has sacrificed and done everything he can to keep us moving forward. But even the strongest person has limits. Omolola's outstanding fees are urgent: we have approximately two weeks to make payment, or she risks having her admission cancelled.</p>
      <h2>Our family is facing another medical crisis</h2>
      <p>My younger sister, Ododo-Ola has lived with sickle cell disease all her life. Recently, she was diagnosed with avascular necrosis and needs a hip replacement. The cost of treatment is far beyond what we can currently afford, which is why its difficult to pay my Omolola's tuition fee, all funds are currently in place for Ododo-Ola's health .</p>
      <p>Imagine being our father, trying to keep one daughter in medical school while another needs major surgery. We are trying to find a way forward without giving up on either of them.</p>
      <blockquote>I am not asking anyone to feel sorry for us. I am asking for a chance to change what is possible for my family.</blockquote>
      <h2>Our goal: ₦3.6 million, or approximately $2,680</h2>
      <p>We are working towards raising ₦3,600,000—approximately US$2,680 to address the urgent financial pressure around Omolola's education. We will be transparent about what each contribution is intended to cover.</p>
      <p>We welcome support of any amount: $1, $5, $20, or whatever you can genuinely afford. Small acts of kindness can add up. Sharing this appeal with someone who may be able to help also matters.</p>
      <h2>I am offering my professional services, too</h2>
      <p>I do not want to ask for support without offering value. As a designer and software engineer, I can discuss fair service arrangements for:</p>
      <ul className="fundraising-service-list"><li><strong>Website design and development</strong> — building or improving a business website or landing page.</li><li><strong>Brand identity and graphic design</strong> — logos, visual identity, marketing graphics, and presentations.</li><li><strong>Digital design and user experience</strong> — making websites and digital products clearer and easier to use.</li></ul>
      <p>We can agree on scope, deliverables, timeline, and fair value before work begins. I am offering real skills in return for an opportunity to help us.</p>
      <div className="fundraising-actions"><Link className="fundraising-button fundraising-button-primary" href="/portfolio">See my works</Link><a className="fundraising-button fundraising-button-secondary" href="mailto:hello@omogiwa.com?subject=Discuss%20a%20service%20arrangement%20to%20support%20Lola">Pay and request for my services</a></div>
      <h2>Verify our claims and documents</h2>
      <p>I understand that trust matters. Please do not rely on this letter alone. You can review the supporting documents and contact me for further appropriate evidence.</p>
      <div className="fundraising-evidence" id="evidence"><a href={profile} target="_blank" rel="noreferrer"><span>STUDENT PROFILE</span><strong>View Omolola's profile</strong><small>Open her profile on the Omogiwa agent site.</small></a><a href={invoice} target="_blank" rel="noreferrer"><span>SCHOOL FEE INVOICE</span><strong>View payment invoice (PDF)</strong><small>Review the invoice provided for this appeal.</small></a><a href={university} target="_blank" rel="noreferrer"><span>INSTITUTION</span><strong>Gregory University Uturu</strong><small>Visit the university website for independent confirmation.</small></a></div>
      <p>If you prefer, we can discuss payment directly to Gregory University Uturu rather than sending money to me. We can confirm the outstanding amount and payment instructions with the institution before any transfer. </p>
      <p>I welcome a person-to-person meeting. I can explain our circumstances, show the documents, answer questions, and discuss sponsorship or service arrangements. If you would like to speak with Lola as well, we can discuss arranging that. We will make reasonable efforts to verify our claims while respecting our privacy.</p>
      <div className="fundraising-actions"><a className="fundraising-button fundraising-button-primary" href="#evidence">Verify claims</a><a className="fundraising-button fundraising-button-secondary" href={meetingUrl}>Talk to me or her in person</a></div>
      <h2 id="donation">A donation, direct school payment, or a chance to work</h2>
      <p>You may donate, pay an agreed amount directly to the university, hire me for a project, or connect us with someone who could sponsor her education. If you need more information, contact me so we can confirm details and agree on a safe way to proceed.</p>
      <div className="fundraising-actions fundraising-actions-final"><a className="fundraising-button fundraising-button-primary" href={donationUrl}>Make a free donation</a><a className="fundraising-button fundraising-button-secondary" href="mailto:hello@omogiwa.com?subject=Discuss%20direct%20school%20payment">Discuss direct school payment</a><a className="fundraising-button fundraising-button-secondary" href={meetingUrl}>Talk to me or her in person</a></div>
      <h2>What this opportunity would mean to us</h2>
      <p>If someone helps Omolola continue her education, she will not take that opportunity for granted. She will keep studying and giving her best to become the doctor she has always wanted to be. We want her to have the chance to finish what she has worked so hard to begin.</p>
      <p>I will keep building my skills and career, and do my best to honour support through my work and the commitments we agree upon. I cannot promise life will suddenly become easy, but I can promise we will not treat your trust or generosity lightly.</p>
      <p>Your support could give Lola a chance to continue towards her dream, ease some of the pressure our father has carried, and help us move closer to getting my younger sister the care she needs.</p>
      <blockquote>Our circumstances today do not have to determine our future tomorrow.</blockquote>
      <p>Please give my sister a chance to become the doctor she has always dreamed of being. Thank you for reading our story . Whatever you can give—even $1—or any share or connection, we will be grateful.</p>
      <p className="fundraising-signature"><strong>Omogbolahan Giwa</strong><span>Multidisciplinary Designer &amp; Software Engineer</span><a href="mailto:hello@omogiwa.com">hello@omogiwa.com</a></p>
      <div className="fundraising-actions fundraising-actions-final"><a className="fundraising-button fundraising-button-primary" href={donationUrl}>Make a free donation</a><a className="fundraising-button fundraising-button-secondary" href="mailto:hello@omogiwa.com?subject=Professional%20services%20to%20support%20Lola">Pay and request for my services</a><Link className="fundraising-button fundraising-button-secondary" href="/portfolio">See my works</Link><a className="fundraising-button fundraising-button-secondary" href="#evidence">Verify claims</a><a className="fundraising-button fundraising-button-secondary" href={meetingUrl}>Talk to me or her in person</a></div>
     
    </div>
  </article></main>;
}
import Link from "next/link";
export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Omogbolahan Giwa — multidisciplinary designer and software engineer. Contact me for design, branding, web, digital strategy and creative collaborations.",
  keywords: [
    "Contact Omogbolahan Giwa",
    "Omogbolahan Giwa contact",
    "OmoGiwa contact",
    "designer contact",
    "software engineer contact",
    "brand designer Nigeria",
    "web designer Nigeria",
    "multidisciplinary designer",
    "creative collaboration",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Omogbolahan Giwa",
    description:
      "Get in touch with Omogbolahan Giwa for design, branding, web, digital strategy and creative collaborations.",
    url: "https://omogiwa.com/contact",
    siteName: "OmoGiwa",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact — Omogbolahan Giwa",
    description:
      "Get in touch with Omogbolahan Giwa for design, branding, web, digital strategy and creative collaborations.",
  },
};
const contacts = [
  {
    label: "Email",
    value: "official@omogiwa.com",
    href: "mailto:official@omogiwa.com",
  },
  {
    label: "WhatsApp",
    value: "YOUR WHATSAPP NUMBER",
    href: "https://wa.me/YOURNUMBER",
  },
  {
    label: "X / Twitter",
    value: "@omo_giiwa",
    href: "https://x.com/omo_giiwa",
  },
  {
    label: "Instagram",
    value: "@decliint",
    href: "https://instagram.com/decliint",
  },
  {
    label: "LinkedIn",
    value: "Omogbolahan Giwa",
    href: "https://www.linkedin.com/in/omogbolahan-giwa-a9b25a345?trk=contact-info",
  },
];
export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-intro">
          <p className="section-label purple">04 / CONTACT</p>
          <h1>
            Let&apos;s <span>talk.</span>
          </h1>
          <p>
            Whether you have a project in mind, want to collaborate, or simply
            want to say hello, you can reach me through any of the channels
            below.
          </p>
        </div>
        <div className="contact-list">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="contact-item"
            >
              <span className="contact-label">{contact.label}</span>
              <span className="contact-value">{contact.value}</span>
              <span className="contact-arrow">↗</span>
            </a>
          ))}
        </div>
        <p className="contact-note">
          Prefer email for project enquiries and professional collaborations.
        </p>
        <Link href="/" className="text-link">
          ← Back home
        </Link>
      </section>
    </main>
  );
}

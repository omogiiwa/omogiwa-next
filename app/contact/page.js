import Link from "next/link";
import "./contact.css";
export const metadata = {
  title: "Contact",
  description:
    "Contact Omogbolahan Giwa — multidisciplinary designer and software engineer. Get in touch for design, branding, web development, digital strategy and creative collaborations.",
  keywords: [
    "Contact Omogbolahan Giwa",
    "Omogbolahan Giwa contact",
    "OmoGiwa contact",
    "designer contact Nigeria",
    "software engineer Nigeria",
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
      "Get in touch with Omogbolahan Giwa for design, branding, web development, digital strategy and creative collaborations.",
    url: "https://omogiwa.com/contact",
    siteName: "OmoGiwa",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact — Omogbolahan Giwa",
    description:
      "Get in touch with Omogbolahan Giwa for design, branding, web development, digital strategy and creative collaborations.",
  },
};
const contacts = [
  {
    label: "Email",
    value: "official@omogiwa.com",
    href: "mailto:official@omogiwa.com",
    description: "For enquiries, projects & collaborations",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.5h18v13H3z" />
        <path d="m3 6 9 7 9-7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "YOUR WHATSAPP NUMBER",
    href: "https://wa.me/2347041189806",
    description: "For a quick conversation",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.2-3.1A8.5 8.5 0 1 1 20 11.5Z" />
        <path d="M8.5 8.5c.2-.4.5-.5.8-.5h.5c.2 0 .4.2.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c.7 1.1 1.6 2 2.7 2.7l.6-.5c.2-.2.5-.2.7-.1l1.7.7c.3.1.4.3.4.6v.4c0 .3-.2.6-.5.8-.4.3-1 .4-1.5.3-3.2-.7-6.1-3.6-6.8-6.8-.1-.5 0-1 .3-1.5Z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    value: "@omo_giiwa",
    href: "https://x.com/omo_giiwa",
    description: "Follow, message or say hello",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h4.3l3.1 4.4L16.2 4H19l-5.3 6.1L19.5 20h-4.3l-3.7-5.1L7 20H4.2l5.8-6.7L5 4Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@decliint",
    href: "https://instagram.com/decliint",
    description: "Design, visuals & everything in between",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.7" r="1" className="contact-icon-fill" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Omogbolahan Giwa",
    href: "https://www.linkedin.com/in/omogbolahan-giwa-a9b25a345?trk=contact-info",
    description: "Professional enquiries & networking",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 10v6M8 7.5v.1M11.5 16v-3.3a2.2 2.2 0 0 1 4.4 0V16M11.5 10v6" />
      </svg>
    ),
  },
];
export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-heading">
          <p className="section-label purple">04 / CONTACT</p>
          <h1>
            Let&apos;s <span>talk.</span>
          </h1>
          <p>
            Have a project, an idea, or just something worth discussing?
            Find me wherever you&apos;re most comfortable.
          </p>
        </div>
        <div className="contact-grid">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="contact-card"
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              <div className="contact-card-top">
                <div className="contact-icon">
                  {contact.icon}
                </div>
                <span className="contact-arrow">↗</span>
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">
                  {contact.label}
                </span>
                <strong>{contact.value}</strong>
                <small>{contact.description}</small>
              </div>
            </a>
          ))}
        </div>
        <div className="contact-footer">
          <span>Prefer email for professional enquiries.</span>
          <Link href="/" className="text-link">
            Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
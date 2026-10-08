"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import "./hire.css";

const steps = [
  "About You",
  "What You Need",
  "Project",
  "Audience",
  "Services",
  "Scope",
  "Timeline",
  "Budget",
  "Working Together",
  "References",
  "Files",
  "Final Details",
];

const serviceOptions = [
  "Brand & Visual Design",
  "Web & Digital Design",
  "Digital Strategy",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  clientType: "",
  companyName: "",
  website: "",
  location: "",
  discoverySource: "",
  previousClient: "",

  services: [],

  projectName: "",
  projectType: "",
  projectDescription: "",
  whyNow: "",
  currentProblem: "",
  consequences: "",
  projectGoals: "",
  worthIt: "",

  audience: "",
  idealCustomer: "",
  desiredFeeling: [],
  desiredAction: "",

  brandNeeds: [],
  existingBrandAssets: [],
  brandKeep: "",
  brandChange: "",
  brandMustKeep: "",
  visualDirection: "",
  admiredBrands: "",
  unwantedStyles: "",
  brandFeel: [],
  brandAssetsUrl: "",

  webType: [],
  currentWebsite: "",
  websiteProblems: "",
  websiteImprovements: "",
  websitePages: "",
  websiteContent: "",
  websiteAssets: "",
  domain: "",
  hosting: "",
  technicalRequirements: "",
  websiteReferences: "",
  priorityDevices: [],

  strategyNeeds: [],
  strategyChallenge: "",
  strategyAttempts: "",
  strategyWorked: "",
  strategyFailed: "",
  competitors: "",
  differentiation: "",
  growthGoals: "",
  importantMetrics: [],
  currentMeasurement: "",

  deliverables: "",
  notNeeded: "",
  multipleApprovers: "",
  approvers: "",
  finalApprover: "",
  otherProfessionals: "",
  otherProfessionalsDetails: "",

  startDate: "",
  deadline: "",
  hardDeadline: "",
  deadlineReason: "",
  deadlineFlexibility: "",
  launchDate: "",
  launchDetails: "",

  budget: "",
  budgetFixed: "",
  scopeFlexibility: "",
  previousQuotes: "",

  collaborationStyle: "",
  feedbackSpeed: "",
  communication: [],
  workingStyle: "",

  references: "",
  referenceLikes: "",
  thingsToAvoid: "",

  anythingElse: "",
  questions: "",
  readiness: "",
  formFeedback: "",
};

const toggleArray = (array, value) =>
  array.includes(value)
    ? array.filter((item) => item !== value)
    : [...array, value];

export default function HirePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggle = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: toggleArray(prev[field], value),
    }));
  };

  const hasService = (service) => form.services.includes(service);

  const validateStep = () => {
    setError("");

    if (step === 0) {
      if (!form.fullName.trim()) {
        setError("Please enter your full name.");
        return false;
      }

      if (!form.email.trim()) {
        setError("Please enter your email address.");
        return false;
      }
    }

    if (step === 1 && form.services.length === 0) {
      setError("Please select at least one service.");
      return false;
    }

    if (step === 2) {
      if (!form.projectName.trim()) {
        setError("Please enter the project or brand name.");
        return false;
      }

      if (!form.projectDescription.trim()) {
        setError("Please tell me about the project.");
        return false;
      }
    }

    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;

    setStep((current) => Math.min(current + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousStep = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const uploadFiles = async () => {
    const uploaded = [];

    for (const file of files) {
      const safeName = file.name
        .replace(/[^a-zA-Z0-9._-]/g, "-")
        .toLowerCase();

      const path = `${Date.now()}-${crypto.randomUUID()}-${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from("hire-files")
        .upload(path, file);

      if (uploadError) {
        throw uploadError;
      }

      uploaded.push({
        name: file.name,
        path,
        type: file.type,
        size: file.size,
      });
    }

    return uploaded;
  };

  const submitForm = async () => {
    setError("");
    setSubmitting(true);

    try {
      const uploadedFiles = await uploadFiles();

      const response = await fetch("/api/hire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          companyName: form.companyName,
          clientType: form.clientType,
          location: form.location,
          website: form.website,
          discoverySource: form.discoverySource,
          previousClient: form.previousClient,
          services: form.services,
          answers: {
            ...form,
          },
          uploadedFiles,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (submitError) {
      console.error(submitError);
      setError(
        "Something went wrong while submitting your inquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <main className="hire-page">
        <section className="hire-success">
          <div className="hire-success-mark">✓</div>

          <span className="hire-eyebrow">INQUIRY RECEIVED</span>

          <h1>Let’s make something useful.</h1>

          <p>
            Thank you for taking the time to tell me about your project. I’ll
            review everything you’ve submitted and get back to you about the
            next steps.
          </p>

          <p>
            If the project is a good fit, we’ll discuss the scope, timeline,
            budget and process before anything begins.
          </p>

          <div className="hire-success-actions">
            <Link href="/">Back to OmoGiwa</Link>
            <Link href="/work">View My Work</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="hire-page">
      <section className="hire-hero">
        <div className="hire-hero-copy">
          <span className="hire-eyebrow">START A PROJECT</span>

          <h1>
            Let’s build
            <br />
            something that <em>works.</em>
          </h1>

          <p>
            Tell me what you’re building, what isn’t working, and where you
            want to go. The more context you give me, the better I can
            understand what the project actually needs.
          </p>
        </div>

        <div className="hire-hero-note">
          <span>01</span>
          <p>
            This isn't a generic contact form. Think of it as the beginning of
            our project conversation.
          </p>
        </div>
      </section>

      <section className="hire-form-wrapper">
        <div className="hire-progress">
          <div className="hire-progress-top">
            <span>
              Step {step + 1} of {steps.length}
            </span>

            <strong>{steps[step]}</strong>
          </div>

          <div className="hire-progress-bar">
            <span
              style={{
                width: `${((step + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          <div className="hire-step-labels">
            {steps.map((item, index) => (
              <button
                key={item}
                type="button"
                className={index === step ? "active" : ""}
                onClick={() => {
                  if (index < step) setStep(index);
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="hire-form">
          {step === 0 && (
            <FormSection
              number="01"
              title="About you"
              description="Let's start with the person behind the project."
            >
              <Field
                label="Full Name"
                required
                value={form.fullName}
                onChange={(value) => update("fullName", value)}
              />

              <Field
                label="Email Address"
                type="email"
                required
                value={form.email}
                onChange={(value) => update("email", value)}
              />

              <Field
                label="Phone / WhatsApp Number"
                value={form.phone}
                onChange={(value) => update("phone", value)}
              />

              <SelectField
                label="What best describes you?"
                value={form.clientType}
                onChange={(value) => update("clientType", value)}
                options={[
                  "Individual / Personal Project",
                  "Founder / Entrepreneur",
                  "Small Business",
                  "Startup",
                  "Established Company",
                  "Creative / Agency",
                  "Non-profit / Organization",
                  "Other",
                ]}
              />

              <Field
                label="Name of your company, brand, organization or project"
                value={form.companyName}
                onChange={(value) => update("companyName", value)}
              />

              <Field
                label="Website / Social Media"
                type="url"
                value={form.website}
                onChange={(value) => update("website", value)}
              />

              <Field
                label="Where are you based?"
                value={form.location}
                onChange={(value) => update("location", value)}
              />

              <SelectField
                label="How did you find me?"
                value={form.discoverySource}
                onChange={(value) => update("discoverySource", value)}
                options={[
                  "Google / Search",
                  "Instagram",
                  "LinkedIn",
                  "X / Twitter",
                  "Referral",
                  "Someone I know",
                  "OmoGiwa website",
                  "Other",
                ]}
              />

              <RadioGroup
                label="Have we worked together before?"
                value={form.previousClient}
                onChange={(value) => update("previousClient", value)}
                options={["Yes", "No"]}
              />
            </FormSection>
          )}

          {step === 1 && (
            <FormSection
              number="02"
              title="What do you need?"
              description="Choose everything that applies. This determines which parts of the briefing you'll see."
            >
              <CheckboxGroup
                label="What are you hiring me for?"
                required
                values={form.services}
                onChange={(value) => toggle("services", value)}
                options={serviceOptions}
              />

              <TextArea
                label="Tell me briefly what you're looking for."
                value={form.projectDescription}
                onChange={(value) => update("projectDescription", value)}
                placeholder="Give me the short version of what you need."
              />
            </FormSection>
          )}

          {step === 2 && (
            <FormSection
              number="03"
              title="The project"
              description="Give me the context behind the work."
            >
              <Field
                label="What is the name of the project / brand?"
                required
                value={form.projectName}
                onChange={(value) => update("projectName", value)}
              />

              <SelectField
                label="Is this a new project or an existing one?"
                value={form.projectType}
                onChange={(value) => update("projectType", value)}
                options={[
                  "Brand new",
                  "Existing brand that needs improvement",
                  "Existing brand undergoing a major change / rebrand",
                  "Existing project that needs something new",
                ]}
              />

              <TextArea
                label="Tell me about it."
                value={form.projectDescription}
                onChange={(value) => update("projectDescription", value)}
                placeholder="What does the business/project do? What are you building? What problem does it solve?"
              />

              <TextArea
                label="Why are you starting this project now?"
                value={form.whyNow}
                onChange={(value) => update("whyNow", value)}
              />

              <TextArea
                label="What problem are you currently experiencing?"
                value={form.currentProblem}
                onChange={(value) => update("currentProblem", value)}
              />

              <TextArea
                label="What would happen if this problem isn't solved?"
                value={form.consequences}
                onChange={(value) => update("consequences", value)}
              />

              <TextArea
                label="What are you hoping this project will achieve?"
                value={form.projectGoals}
                onChange={(value) => update("projectGoals", value)}
              />

              <TextArea
                label='What would make you say, "This was worth it"?'
                value={form.worthIt}
                onChange={(value) => update("worthIt", value)}
              />
            </FormSection>
          )}

          {step === 3 && (
            <FormSection
              number="04"
              title="Your audience"
              description="Good work needs to make sense to the people it's meant for."
            >
              <TextArea
                label="Who are you trying to reach?"
                value={form.audience}
                onChange={(value) => update("audience", value)}
              />

              <TextArea
                label="Who is your ideal customer / user?"
                value={form.idealCustomer}
                onChange={(value) => update("idealCustomer", value)}
              />

              <CheckboxGroup
                label="What do you want people to think or feel?"
                values={form.desiredFeeling}
                onChange={(value) => toggle("desiredFeeling", value)}
                options={[
                  "Trust",
                  "Excitement",
                  "Confidence",
                  "Curiosity",
                  "Connection",
                  "Luxury",
                  "Simplicity",
                  "Energy",
                  "Other",
                ]}
              />

              <TextArea
                label="What action do you ultimately want them to take?"
                value={form.desiredAction}
                onChange={(value) => update("desiredAction", value)}
                placeholder="Buy, book, sign up, contact you, learn, trust your brand, etc."
              />
            </FormSection>
          )}

          {step === 4 && (
            <FormSection
              number="05"
              title="Your services"
              description="Now let's get specific about the work."
            >
              {hasService("Brand & Visual Design") && (
                <ServiceBlock
                  title="Brand & Visual Design"
                  description="Tell me about the identity and visual side of the project."
                >
                  <CheckboxGroup
                    label="What do you need?"
                    values={form.brandNeeds}
                    onChange={(value) => toggle("brandNeeds", value)}
                    options={[
                      "Logo",
                      "Complete brand identity",
                      "Brand refresh",
                      "Rebrand",
                      "Visual identity",
                      "Brand guidelines",
                      "Colour system",
                      "Typography system",
                      "Social media design",
                      "Marketing / advertising graphics",
                      "Presentation design",
                      "Print design",
                      "Packaging",
                      "Business cards / stationery",
                      "Art direction",
                      "Illustration",
                      "Campaign visuals",
                      "Other",
                    ]}
                  />

                  <CheckboxGroup
                    label="What already exists?"
                    values={form.existingBrandAssets}
                    onChange={(value) =>
                      toggle("existingBrandAssets", value)
                    }
                    options={[
                      "Logo",
                      "Brand colours",
                      "Fonts",
                      "Brand guidelines",
                      "Existing visual identity",
                      "Social media presence",
                      "Marketing materials",
                      "Nothing yet",
                    ]}
                  />

                  <TextArea
                    label="What do you want to keep?"
                    value={form.brandKeep}
                    onChange={(value) => update("brandKeep", value)}
                  />

                  <TextArea
                    label="What do you want to change?"
                    value={form.brandChange}
                    onChange={(value) => update("brandChange", value)}
                  />

                  <TextArea
                    label="Are there existing brand elements that must remain unchanged?"
                    value={form.brandMustKeep}
                    onChange={(value) => update("brandMustKeep", value)}
                  />

                  <TextArea
                    label="Describe the visual direction you're imagining."
                    value={form.visualDirection}
                    onChange={(value) =>
                      update("visualDirection", value)
                    }
                  />

                  <TextArea
                    label="Are there brands whose visual identity you admire?"
                    value={form.admiredBrands}
                    onChange={(value) => update("admiredBrands", value)}
                  />

                  <TextArea
                    label="Are there visual styles you definitely DON'T want?"
                    value={form.unwantedStyles}
                    onChange={(value) =>
                      update("unwantedStyles", value)
                    }
                  />

                  <CheckboxGroup
                    label="What should your brand feel like?"
                    values={form.brandFeel}
                    onChange={(value) => toggle("brandFeel", value)}
                    options={[
                      "Bold",
                      "Minimal",
                      "Premium",
                      "Playful",
                      "Serious",
                      "Professional",
                      "Experimental",
                      "Modern",
                      "Elegant",
                      "Technical",
                      "Human",
                      "Friendly",
                      "Energetic",
                      "Luxurious",
                      "Raw",
                      "Artistic",
                      "Trustworthy",
                    ]}
                  />

                  <Field
                    label="Link to existing brand assets"
                    type="url"
                    value={form.brandAssetsUrl}
                    onChange={(value) =>
                      update("brandAssetsUrl", value)
                    }
                  />
                </ServiceBlock>
              )}

              {hasService("Web & Digital Design") && (
                <ServiceBlock
                  title="Web & Digital Design"
                  description="Tell me what the digital experience needs to do."
                >
                  <CheckboxGroup
                    label="What are you looking to build?"
                    values={form.webType}
                    onChange={(value) => toggle("webType", value)}
                    options={[
                      "Personal website",
                      "Portfolio",
                      "Business website",
                      "Landing page",
                      "E-commerce website",
                      "Web application",
                      "SaaS / product interface",
                      "Dashboard",
                      "Blog",
                      "Online platform",
                      "Redesign of an existing website",
                      "UI / UX design only",
                      "Other",
                    ]}
                  />

                  <Field
                    label="Do you already have a website?"
                    value={form.currentWebsite}
                    onChange={(value) =>
                      update("currentWebsite", value)
                    }
                  />

                  <TextArea
                    label="What is wrong with the current website?"
                    value={form.websiteProblems}
                    onChange={(value) =>
                      update("websiteProblems", value)
                    }
                  />

                  <TextArea
                    label="What should the new website do better?"
                    value={form.websiteImprovements}
                    onChange={(value) =>
                      update("websiteImprovements", value)
                    }
                  />

                  <TextArea
                    label="What pages / features do you need?"
                    value={form.websitePages}
                    onChange={(value) =>
                      update("websitePages", value)
                    }
                  />

                  <SelectField
                    label="Do you have the content already?"
                    value={form.websiteContent}
                    onChange={(value) =>
                      update("websiteContent", value)
                    }
                    options={[
                      "Yes, everything",
                      "Most of it",
                      "Some of it",
                      "No",
                      "I need help creating it",
                    ]}
                  />

                  <SelectField
                    label="Do you have images / assets?"
                    value={form.websiteAssets}
                    onChange={(value) =>
                      update("websiteAssets", value)
                    }
                    options={[
                      "Yes",
                      "Some",
                      "No",
                      "I need help sourcing / creating them",
                    ]}
                  />

                  <RadioGroup
                    label="Do you already have a domain?"
                    value={form.domain}
                    onChange={(value) => update("domain", value)}
                    options={["Yes", "No"]}
                  />

                  <RadioGroup
                    label="Do you already have hosting?"
                    value={form.hosting}
                    onChange={(value) => update("hosting", value)}
                    options={["Yes", "No"]}
                  />

                  <TextArea
                    label="Do you have any technical requirements?"
                    value={form.technicalRequirements}
                    onChange={(value) =>
                      update("technicalRequirements", value)
                    }
                    placeholder="Payments, databases, APIs, accounts, booking, newsletter, AI, analytics, etc."
                  />

                  <TextArea
                    label="Are there websites you like?"
                    value={form.websiteReferences}
                    onChange={(value) =>
                      update("websiteReferences", value)
                    }
                  />

                  <CheckboxGroup
                    label="What devices should the experience prioritize?"
                    values={form.priorityDevices}
                    onChange={(value) =>
                      toggle("priorityDevices", value)
                    }
                    options={["Mobile", "Tablet", "Desktop", "All equally"]}
                  />
                </ServiceBlock>
              )}

              {hasService("Digital Strategy") && (
                <ServiceBlock
                  title="Digital Strategy"
                  description="Let's understand the strategic problem before jumping into solutions."
                >
                  <CheckboxGroup
                    label="What do you need help with?"
                    values={form.strategyNeeds}
                    onChange={(value) =>
                      toggle("strategyNeeds", value)
                    }
                    options={[
                      "Brand positioning",
                      "Digital presence",
                      "Website strategy",
                      "Content strategy",
                      "Social media strategy",
                      "Audience strategy",
                      "Customer journey",
                      "Digital product strategy",
                      "Marketing direction",
                      "Launch strategy",
                      "Growth strategy",
                      "Conversion strategy",
                      "Competitor research",
                      "General digital direction",
                      "I'm not sure yet",
                      "Other",
                    ]}
                  />

                  <TextArea
                    label="What is your biggest challenge right now?"
                    value={form.strategyChallenge}
                    onChange={(value) =>
                      update("strategyChallenge", value)
                    }
                  />

                  <TextArea
                    label="What have you tried already?"
                    value={form.strategyAttempts}
                    onChange={(value) =>
                      update("strategyAttempts", value)
                    }
                  />

                  <TextArea
                    label="What worked?"
                    value={form.strategyWorked}
                    onChange={(value) =>
                      update("strategyWorked", value)
                    }
                  />

                  <TextArea
                    label="What didn't work?"
                    value={form.strategyFailed}
                    onChange={(value) =>
                      update("strategyFailed", value)
                    }
                  />

                  <TextArea
                    label="Who are your main competitors?"
                    value={form.competitors}
                    onChange={(value) =>
                      update("competitors", value)
                    }
                  />

                  <TextArea
                    label="What makes you different from them?"
                    value={form.differentiation}
                    onChange={(value) =>
                      update("differentiation", value)
                    }
                  />

                  <TextArea
                    label="What do you want to achieve over the next 3–12 months?"
                    value={form.growthGoals}
                    onChange={(value) =>
                      update("growthGoals", value)
                    }
                  />

                  <CheckboxGroup
                    label="What metrics matter to you?"
                    values={form.importantMetrics}
                    onChange={(value) =>
                      toggle("importantMetrics", value)
                    }
                    options={[
                      "Sales",
                      "Leads",
                      "Website traffic",
                      "Engagement",
                      "Conversions",
                      "Sign-ups",
                      "Brand awareness",
                      "Customer retention",
                      "Audience growth",
                      "Revenue",
                      "Other",
                    ]}
                  />

                  <TextArea
                    label="What do you currently use to measure performance?"
                    value={form.currentMeasurement}
                    onChange={(value) =>
                      update("currentMeasurement", value)
                    }
                  />
                </ServiceBlock>
              )}
            </FormSection>
          )}

          {step === 5 && (
            <FormSection
              number="06"
              title="Scope & deliverables"
              description="Let's understand exactly what needs to come out of this project."
            >
              <TextArea
                label="What would you like me to deliver?"
                value={form.deliverables}
                onChange={(value) => update("deliverables", value)}
                placeholder="Be as specific or as rough as you like."
              />

              <TextArea
                label="Is there anything you definitely DON'T need?"
                value={form.notNeeded}
                onChange={(value) => update("notNeeded", value)}
              />

              <RadioGroup
                label="Are there multiple people involved in approving the project?"
                value={form.multipleApprovers}
                onChange={(value) =>
                  update("multipleApprovers", value)
                }
                options={["Yes", "No"]}
              />

              {form.multipleApprovers === "Yes" && (
                <Field
                  label="Who will be involved?"
                  value={form.approvers}
                  onChange={(value) => update("approvers", value)}
                />
              )}

              <Field
                label="Who has final approval?"
                value={form.finalApprover}
                onChange={(value) =>
                  update("finalApprover", value)
                }
              />

              <RadioGroup
                label="Will you be working with other designers, developers, agencies or contractors?"
                value={form.otherProfessionals}
                onChange={(value) =>
                  update("otherProfessionals", value)
                }
                options={["Yes", "No"]}
              />

              {form.otherProfessionals === "Yes" && (
                <TextArea
                  label="Tell me about their role."
                  value={form.otherProfessionalsDetails}
                  onChange={(value) =>
                    update("otherProfessionalsDetails", value)
                  }
                />
              )}
            </FormSection>
          )}

          {step === 6 && (
            <FormSection
              number="07"
              title="Timeline"
              description="Let's understand when this needs to happen."
            >
              <Field
                label="When would you ideally like to start?"
                type="date"
                value={form.startDate}
                onChange={(value) => update("startDate", value)}
              />

              <Field
                label="When does the project need to be completed?"
                type="date"
                value={form.deadline}
                onChange={(value) => update("deadline", value)}
              />

              <RadioGroup
                label="Is there a hard deadline?"
                value={form.hardDeadline}
                onChange={(value) => update("hardDeadline", value)}
                options={["Yes", "No"]}
              />

              {form.hardDeadline === "Yes" && (
                <TextArea
                  label="Why is this deadline important?"
                  value={form.deadlineReason}
                  onChange={(value) =>
                    update("deadlineReason", value)
                  }
                />
              )}

              <SelectField
                label="Is the deadline flexible?"
                value={form.deadlineFlexibility}
                onChange={(value) =>
                  update("deadlineFlexibility", value)
                }
                options={["Yes", "Somewhat", "No"]}
              />

              <RadioGroup
                label="Is there an upcoming launch, event, campaign or announcement?"
                value={form.launchDate}
                onChange={(value) => update("launchDate", value)}
                options={["Yes", "No"]}
              />

              {form.launchDate === "Yes" && (
                <TextArea
                  label="Tell me about it and include the date."
                  value={form.launchDetails}
                  onChange={(value) =>
                    update("launchDetails", value)
                  }
                />
              )}
            </FormSection>
          )}

          {step === 7 && (
            <FormSection
              number="08"
              title="Budget"
              description="Budget helps me understand the appropriate scope and approach."
            >
              <RadioGroup
                label="Do you have a budget range for this project?"
                required
                value={form.budget}
                onChange={(value) => update("budget", value)}
                options={[
                  "Under ₦100,000",
                  "₦100,000 – ₦250,000",
                  "₦250,000 – ₦500,000",
                  "₦500,000 – ₦1,000,000",
                  "₦1,000,000 – ₦2,500,000",
                  "₦2,500,000+",
                  "I'm not sure yet",
                  "I'd prefer to discuss this",
                ]}
              />

              <SelectField
                label="Is the budget fixed?"
                value={form.budgetFixed}
                onChange={(value) => update("budgetFixed", value)}
                options={[
                  "Yes",
                  "Somewhat flexible",
                  "Flexible depending on scope",
                ]}
              />

              <RadioGroup
                label="If the budget doesn't match the full scope, would you be open to reducing the scope or working in phases?"
                value={form.scopeFlexibility}
                onChange={(value) =>
                  update("scopeFlexibility", value)
                }
                options={["Yes", "No", "Maybe"]}
              />

              <TextArea
                label="Have you received quotes from other professionals?"
                value={form.previousQuotes}
                onChange={(value) =>
                  update("previousQuotes", value)
                }
              />
            </FormSection>
          )}

          {step === 8 && (
            <FormSection
              number="09"
              title="Working together"
              description="Different projects need different ways of working."
            >
              <RadioGroup
                label="What kind of collaboration do you prefer?"
                value={form.collaborationStyle}
                onChange={(value) =>
                  update("collaborationStyle", value)
                }
                options={[
                  "You take the lead and I provide feedback",
                  "I want to be involved throughout",
                  "Somewhere in between",
                  "I'm not sure",
                ]}
              />

              <SelectField
                label="How quickly can you typically provide feedback?"
                value={form.feedbackSpeed}
                onChange={(value) =>
                  update("feedbackSpeed", value)
                }
                options={[
                  "Within a few hours",
                  "Within 1 day",
                  "2–3 days",
                  "4–7 days",
                  "It depends",
                ]}
              />

              <CheckboxGroup
                label="How would you prefer to communicate?"
                values={form.communication}
                onChange={(value) => toggle("communication", value)}
                options={[
                  "WhatsApp",
                  "Email",
                  "Video calls",
                  "Zoom / Google Meet",
                  "Other",
                ]}
              />

              <TextArea
                label="Is there anything about the way you work that I should know?"
                value={form.workingStyle}
                onChange={(value) => update("workingStyle", value)}
              />
            </FormSection>
          )}

          {step === 9 && (
            <FormSection
              number="10"
              title="References & inspiration"
              description="Show me what you're thinking."
            >
              <TextArea
                label="Share anything that can help me understand your vision."
                value={form.references}
                onChange={(value) => update("references", value)}
                placeholder="Websites, Pinterest boards, Instagram pages, competitors, moodboards, screenshots, videos, etc."
              />

              <TextArea
                label="What do you like about the references you've shared?"
                value={form.referenceLikes}
                onChange={(value) =>
                  update("referenceLikes", value)
                }
              />

              <TextArea
                label="What should this project NOT look or feel like?"
                value={form.thingsToAvoid}
                onChange={(value) =>
                  update("thingsToAvoid", value)
                }
              />
            </FormSection>
          )}

          {step === 10 && (
            <FormSection
              number="11"
              title="Files & materials"
              description="Upload anything that could help me understand the project."
            >
              <div className="hire-upload">
                <input
                  id="hire-files"
                  type="file"
                  multiple
                  accept=".pdf,.png,.jpg,.jpeg,.webp,.svg,.zip,.doc,.docx,.ppt,.pptx"
                  onChange={(event) =>
                    setFiles(Array.from(event.target.files || []))
                  }
                />

                <label htmlFor="hire-files">
                  <span>+</span>
                  <strong>Choose project files</strong>
                  <small>
                    Logos, images, brand guidelines, documents, references,
                    wireframes, etc.
                  </small>
                </label>
              </div>

              {files.length > 0 && (
                <div className="hire-file-list">
                  {files.map((file) => (
                    <div key={`${file.name}-${file.size}`}>
                      <span>{file.name}</span>
                      <small>
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </small>
                    </div>
                  ))}
                </div>
              )}
            </FormSection>
          )}

          {step === 11 && (
            <FormSection
              number="12"
              title="Final details"
              description="Almost there."
            >
              <TextArea
                label="Is there anything I haven't asked that you think I should know?"
                value={form.anythingElse}
                onChange={(value) => update("anythingElse", value)}
              />

              <TextArea
                label="What question do you have for me?"
                value={form.questions}
                onChange={(value) => update("questions", value)}
              />

              <RadioGroup
                label="How ready are you to start?"
                value={form.readiness}
                onChange={(value) => update("readiness", value)}
                options={[
                  "I'm ready to start",
                  "I'm actively looking for someone",
                  "I'm exploring my options",
                  "I'm just trying to understand what's possible",
                ]}
              />

              <SelectField
                label="How did you feel about this form?"
                value={form.formFeedback}
                onChange={(value) => update("formFeedback", value)}
                options={[
                  "Very easy",
                  "Pretty easy",
                  "A bit long",
                  "Too long",
                  "I enjoyed it",
                  "I have no idea why I'm being asked this",
                ]}
              />
            </FormSection>
          )}

          {error && <div className="hire-error">{error}</div>}

          <div className="hire-navigation">
            {step > 0 ? (
              <button
                type="button"
                className="hire-back"
                onClick={previousStep}
                disabled={submitting}
              >
                ← Back
              </button>
            ) : (
              <span />
            )}

            {step < steps.length - 1 ? (
              <button
                type="button"
                className="hire-next"
                onClick={nextStep}
              >
                Continue →
              </button>
            ) : (
              <button
                type="button"
                className="hire-submit"
                onClick={submitForm}
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Submit Project Inquiry →"}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function FormSection({ number, title, description, children }) {
  return (
    <div className="hire-section">
      <div className="hire-section-heading">
        <span>{number}</span>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="hire-fields">{children}</div>
    </div>
  );
}

function ServiceBlock({ title, description, children }) {
  return (
    <div className="hire-service-block">
      <div className="hire-service-heading">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {children}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}) {
  return (
    <label className="hire-field">
      <span>
        {label} {required && <b>*</b>}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextArea({ label, value, onChange, placeholder = "" }) {
  return (
    <label className="hire-field hire-textarea">
      <span>{label}</span>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={5}
      />
    </label>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="hire-field">
      <span>{label}</span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function RadioGroup({ label, value, onChange, options, required = false }) {
  return (
    <div className="hire-choice-field">
      <span className="hire-choice-label">
        {label} {required && <b>*</b>}
      </span>

      <div className="hire-choice-grid">
        {options.map((option) => (
          <label
            key={option}
            className={`hire-choice ${
              value === option ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name={label}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
            />

            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function CheckboxGroup({ label, values, onChange, options, required = false }) {
  return (
    <div className="hire-choice-field">
      <span className="hire-choice-label">
        {label} {required && <b>*</b>}
      </span>

      <div className="hire-choice-grid">
        {options.map((option) => (
          <label
            key={option}
            className={`hire-choice ${
              values.includes(option) ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={values.includes(option)}
              onChange={() => onChange(option)}
            />

            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

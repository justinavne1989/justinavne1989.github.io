export const asset = (path: string) => {
  const cleaned = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${cleaned}`;
};

export const site = {
  name: "Justin Avne",
  title: "Justin Avne | Product, AI & Data",
  description:
    "Product portfolio of Justin Avne, focused on product strategy, applied AI, consumer technology, sports technology, data products, and digital transformation.",
  linkedin: "https://www.linkedin.com/in/justin-avne-5b015324a",
  resumePath: "resume/justin-avne-resume.pdf",
  email: "",
} as const;

export const navLinks = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
] as const;

export const processSteps = [
  "Understand the Problem",
  "Define the Product",
  "Prototype",
  "Connect Data & Systems",
  "Build & Validate",
  "Launch & Improve",
] as const;

export const focusAreas = [
  {
    title: "Product Strategy",
    copy: "Turning ambiguous business problems into a clear product direction, scope, and decision workflow.",
  },
  {
    title: "AI-Enabled Products",
    copy: "Designing AI into real workflows — with structure, review, and governance — rather than as a novelty.",
  },
  {
    title: "Consumer Products",
    copy: "Shaping products people actually use: onboarding, subscriptions, engagement, and the moments that matter.",
  },
  {
    title: "Data & Analytics",
    copy: "Bringing fragmented information into an environment where teams can make decisions with confidence.",
  },
  {
    title: "Sports Technology",
    copy: "Building products where league context, player data, and decision quality have to live together.",
  },
  {
    title: "APIs & Integrations",
    copy: "Understanding what systems can actually connect — and designing products around those constraints.",
  },
  {
    title: "Rapid Prototyping",
    copy: "Making proposed experiences visible so teams can align on something more concrete than a document.",
  },
  {
    title: "Digital Transformation",
    copy: "Moving work out of disconnected reports, tools, and side conversations into a product people can operate.",
  },
] as const;

export const aboutFocus = [
  "Product Strategy",
  "Applied AI",
  "Consumer Technology",
  "Sports Technology",
  "Data Products",
  "Digital Transformation",
] as const;

export const confidentialityCopy =
  "Representative product mockups recreated with generic branding to protect internal business information.";

export const launchEcosystem = [
  "Consumer Experience",
  "Mobile App",
  "Subscription",
  "Payments / Subscriber Data",
  "Lifecycle & Engagement",
  "Analytics / Operations",
] as const;

export const launchProofs = [
  {
    title: "Customer-facing product",
    copy: "Consumer mobile application and paid subscription experience.",
  },
  {
    title: "Cross-functional launch",
    copy: "Internal business and technology teams working with an external application-development partner.",
  },
  {
    title: "Beyond launch",
    copy: "Subscriber analytics, lifecycle engagement, retention, and operational workflows.",
  },
] as const;

export const afterLaunchFlow = [
  "Subscriber Data",
  "Engagement Signals",
  "Lifecycle Communication",
  "Retention / Growth Decisions",
  "Product & Operational Improvements",
] as const;

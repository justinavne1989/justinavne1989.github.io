import { asset, confidentialityCopy } from "./site";

export type ProjectId =
  | "consumer-app"
  | "subscription-intelligence"
  | "ai-creative"
  | "product-planning"
  | "quantum-gm";

export type Screenshot = {
  src: string;
  alt: string;
  title?: string;
  navLabel?: string;
  caption: string;
};

export type Project = {
  id: ProjectId;
  slug: string;
  href: string;
  category: string;
  title: string;
  subtitle?: string;
  thesis: string;
  description: string;
  tags: string[];
  featured: boolean;
  inDevelopment?: boolean;
  confidential?: boolean;
  sequence?: number;
  kind: "leadership" | "built";
  hero?: Screenshot;
  tour: Screenshot[];
  featureShots: Screenshot[];
};

export const projects: Project[] = [
  {
    id: "consumer-app",
    slug: "consumer-app",
    href: "/work/consumer-app",
    category: "Consumer Product / Cross-Functional Delivery",
    title: "Consumer App & Subscription Platform Launch",
    thesis:
      "A consumer launch is a product system: app, subscription, payments, operations, and the work that continues after release.",
    description:
      "Led cross-functional delivery of a consumer mobile application and paid subscription platform across internal business and technology teams, an external development partner, subscription operations, analytics, lifecycle communications, and post-launch growth work.",
    tags: [
      "Product Delivery",
      "Subscriptions",
      "Cross-functional",
      "Analytics",
      "Lifecycle",
    ],
    featured: true,
    kind: "leadership",
    tour: [],
    featureShots: [],
  },
  {
    id: "subscription-intelligence",
    slug: "subscription-intelligence",
    href: "/work/subscription-intelligence",
    category: "Data Product / Growth",
    title: "Subscription Growth & Intelligence Platform",
    thesis:
      "Subscription decisions get weaker when the information required to make them lives across different systems, reports, and workflows.",
    description:
      "A centralized product bringing subscriber, revenue, acquisition-funnel, engagement, marketing, and lifecycle data together into a unified decision-making environment.",
    tags: ["Analytics", "Subscriptions", "Growth", "Data", "Dashboards"],
    featured: true,
    confidential: true,
    sequence: 1,
    kind: "built",
    hero: {
      src: asset("images/subscription-intelligence/dashboard.jpg"),
      alt: "Membership dashboard showing program health, revenue trend, plan mix, and renewal outlook",
      title: "Executive dashboard",
      caption:
        "Brings subscriber health, revenue, engagement, and lifecycle signals into one operating view.",
    },
    tour: [
      {
        src: asset("images/subscription-intelligence/dashboard.jpg"),
        alt: "Membership dashboard with health metrics, revenue trend, plan mix, and renewal outlook",
        title: "Executive dashboard",
        navLabel: "Dashboard",
        caption:
          "Brings subscriber health, revenue, engagement, and lifecycle signals into one operating view.",
      },
      {
        src: asset("images/subscription-intelligence/audience-segments.jpg"),
        alt: "Audience view with high-value members at risk and segment distribution",
        title: "Subscriber intelligence",
        navLabel: "Audiences",
        caption:
          "Moves from program totals to the members and segments where risk actually sits.",
      },
      {
        src: asset("images/subscription-intelligence/analytics-overview.jpg"),
        alt: "Analytics overview connecting revenue to first-touch channels and review signals",
        title: "Acquisition",
        navLabel: "Analytics",
        caption:
          "Connects membership movement to the channels and signals that produced it.",
      },
      {
        src: asset("images/subscription-intelligence/churn-engagement.jpg"),
        alt: "Churn and engagement view with at-risk revenue and leading causes",
        title: "Retention",
        navLabel: "Retention",
        caption:
          "Makes retention pressure operational: what is at risk, why, and where to intervene.",
      },
      {
        src: asset("images/subscription-intelligence/promotions.jpg"),
        alt: "Promotions workspace with offer performance, uptake, and guardrails",
        title: "Lifecycle offers",
        navLabel: "Lifecycle",
        caption:
          "Treats promotions as observed experiments with guardrails, not a separate marketing spreadsheet.",
      },
      {
        src: asset("images/subscription-intelligence/campaign-initiatives.jpg"),
        alt: "Campaign initiatives portfolio with owner, stage, target, and contribution",
        title: "Campaigns",
        navLabel: "Campaigns",
        caption:
          "Shows growth work as a portfolio — owner, stage, and contribution — in the same environment as the data.",
      },
      {
        src: asset("images/subscription-intelligence/ask-the-data.jpg"),
        alt: "Ask the Data answering a natural-language question about campaign revenue",
        title: "Questions in the workspace",
        navLabel: "Questions",
        caption:
          "Lets operators ask a business question in language and receive an answer grounded in connected sources.",
      },
      {
        src: asset("images/subscription-intelligence/data-trust.jpg"),
        alt: "Data trust view with source health, freshness, and billing reconciliation",
        title: "Source trust",
        navLabel: "Trust",
        caption:
          "Makes the decision environment trustworthy by exposing source health, freshness, and reconciliation.",
      },
    ],
    featureShots: [
      {
        src: asset("images/subscription-intelligence/ai-director.jpg"),
        alt: "AI director recommending a 30-day plan with confidence and evidence",
        title: "Prioritized next actions",
        caption:
          "Turns current business context into a sequenced plan, with evidence and confidence attached.",
      },
      {
        src: asset("images/subscription-intelligence/alerts.jpg"),
        alt: "Alerts workspace with monitoring rules, conditions, and owners",
        title: "Operating alerts",
        caption:
          "Surfaces material changes — payment recovery, churn, source freshness — before they become a surprise in a weekly report.",
      },
      {
        src: asset("images/subscription-intelligence/reports.jpg"),
        alt: "Reports workspace with scheduled exports, recent runs, and snapshots",
        title: "Reporting operations",
        caption:
          "Puts scheduled membership, renewal, and campaign reporting in the same product as the decision surfaces.",
      },
    ],
  },
  {
    id: "ai-creative",
    slug: "ai-creative",
    href: "/work/ai-creative",
    category: "Applied AI / Product",
    title: "AI-Assisted Creative Production Platform",
    thesis:
      "Creative production should start from a business request and end in an editable, reviewable asset — not a pile of disconnected prompts.",
    description:
      "A prompt-driven creative production platform designed to turn natural-language requests into editable marketing, editorial, campaign, data-visualization, and presentation assets.",
    tags: [
      "Applied AI",
      "AI Workflows",
      "APIs",
      "Human-in-the-Loop",
      "Automation",
    ],
    featured: true,
    confidential: true,
    sequence: 2,
    kind: "built",
    hero: {
      src: asset("images/ai-creative/home.jpg"),
      alt: "Creative production home screen with four starting jobs: thumbnail, campaign pack, data visual, and live presentation",
      title: "Workspace",
      caption:
        "Gives a fragmented creative operation one starting point: choose the job, then produce within brand guardrails.",
    },
    tour: [
      {
        src: asset("images/ai-creative/home.jpg"),
        alt: "Creative production home with recent projects and job types",
        title: "Workspace",
        caption:
          "Gives a fragmented creative operation one starting point: choose the job, then produce within brand guardrails.",
      },
      {
        src: asset("images/ai-creative/thumbnail-setup.jpg"),
        alt: "Thumbnail setup with a natural-language prompt and editorial controls",
        title: "Create",
        caption:
          "Turns a natural-language request into structured editorial controls before anything is generated.",
      },
      {
        src: asset("images/ai-creative/concept-review.jpg"),
        alt: "Three generated thumbnail concepts with refinement options",
        title: "Asset workflow",
        caption:
          "Presents multiple directions so the team can choose a path, not accept a single opaque output.",
      },
      {
        src: asset("images/ai-creative/editorial-refinement.jpg"),
        alt: "Before and after refinement of a thumbnail using a language prompt and layer controls",
        title: "Revision",
        caption:
          "Keeps a human in the loop: language-driven refinement with a visible before/after and an explicit accept path.",
      },
      {
        src: asset("images/ai-creative/campaign-pack.jpg"),
        alt: "Campaign pack adapting one master creative across seven placements",
        title: "Campaign package",
        caption:
          "Adapts one approved master into the placements a campaign actually needs.",
      },
      {
        src: asset("images/ai-creative/data-map-live.jpg"),
        alt: "Live district results map with selected-district detail and a send-to-present action",
        title: "Data visualization",
        caption:
          "Treats live data visuals as a first-class production output, ready to move into presentation.",
      },
      {
        src: asset("images/ai-creative/review-queue.jpg"),
        alt: "Review workspace with approval queue, version trail, and preflight checks",
        title: "Review",
        caption:
          "Makes approval a product surface: queue, versions, preflight, and a decision — not a side conversation.",
      },
      {
        src: asset("images/ai-creative/producer-console.jpg"),
        alt: "Live producer console with rundown, program preview, and take controls",
        title: "Presentation",
        caption:
          "Closes the loop from produced assets into a producer-ready rundown for live use.",
      },
    ],
    featureShots: [
      {
        src: asset("images/ai-creative/chart-builder.jpg"),
        alt: "Chart builder with editorial fields, source data, and a broadcast preview",
        title: "Editorial chart production",
        caption:
          "Lets editorial intent shape a broadcast-ready chart from source data and a takeaway.",
      },
      {
        src: asset("images/ai-creative/asset-library.jpg"),
        alt: "Asset library of approved logos and brand materials",
        title: "Reusable brand rules",
        caption:
          "Keeps reusable brand assets in the same system as generation, so production does not drift.",
      },
      {
        src: asset("images/ai-creative/fullscreen-output.jpg"),
        alt: "Fullscreen election results board produced by the platform",
        title: "Finished output",
        caption:
          "The product is judged by the board a producer can actually put on air — not by the prompt that started it.",
      },
    ],
  },
  {
    id: "product-planning",
    slug: "product-planning",
    href: "/work/product-planning",
    category: "Product Operations / Internal Product",
    title: "Product Planning & Prototyping Platform",
    thesis:
      "Teams align faster when a proposed change is a visible experience, not only a written requirement.",
    description:
      "An interactive platform designed to turn product audits, feature concepts, and redesign ideas into visual prototypes and implementation-ready requirements.",
    tags: [
      "Product Discovery",
      "Rapid Prototyping",
      "Requirements",
      "UX",
      "Product Operations",
    ],
    featured: true,
    confidential: true,
    sequence: 3,
    kind: "built",
    hero: {
      src: asset("images/product-planning/guided-tour.png"),
      alt: "Product planning studio with idea cards beside a live homepage prototype",
      title: "Guided prototype tour",
      caption:
        "Connects a prioritized idea to the live prototype it would create — so the room is looking at the same proposed experience.",
    },
    tour: [
      {
        src: asset("images/product-planning/guided-tour.png"),
        alt: "Guided prototype tour linking a related-stories idea card to a live article module",
        title: "Issue to concept",
        caption:
          "Connects a prioritized idea to the live prototype it would create — so the room is looking at the same proposed experience.",
      },
      {
        src: asset("images/product-planning/backlog-and-result.png"),
        alt: "Backlog of idea cards with an instant show-result control",
        title: "Prioritize, then prove",
        caption:
          "Makes prioritization visible, then jumps from a selected idea to the finished module without leaving the session.",
      },
      {
        src: asset("images/product-planning/mobile-fidelity.png"),
        alt: "Same idea deck reviewed inside a mobile prototype frame",
        title: "Same deck, mobile fidelity",
        caption:
          "Reviews the same ordered idea deck in a real phone context, without maintaining a second prototype.",
      },
      {
        src: asset("images/product-planning/baseline-prototype.png"),
        alt: "Baseline desktop and mobile homepage before proposed enhancements",
        title: "Baseline",
        caption:
          "Establishes the current experience so proposed changes have a shared before-state.",
      },
      {
        src: asset("images/product-planning/reading-progress.png"),
        alt: "Proposed reading-progress cues on desktop and mobile article views",
        title: "Visual prototype",
        caption:
          "Shows a specific proposed intervention — orientation during reading — as it would appear across widths.",
      },
      {
        src: asset("images/product-planning/reader-hub.png"),
        alt: "Personalized reader hub prototype with continue-reading and recommendations",
        title: "Demonstration",
        caption:
          "Visualizes a personal front page as a retention surface, not a document describing one.",
      },
      {
        src: asset("images/product-planning/membership-states.png"),
        alt: "Locked membership state beside a signed-in member continuing a documentary",
        title: "Implementation-ready thinking",
        caption:
          "Makes the membership value exchange concrete: the locked state versus the moment a member can continue.",
      },
    ],
    featureShots: [
      {
        src: asset("images/product-planning/related-stories.png"),
        alt: "Related stories module at the end of an article",
        title: "The proposed next step",
        caption:
          "The related-stories module is the kind of change the planning environment exists to make discussable.",
      },
    ],
  },
  {
    id: "quantum-gm",
    slug: "quantum-gm",
    href: "/work/quantum-gm",
    category: "Sports Technology / Data Product",
    title: "Quantum GM",
    subtitle: "Fantasy Football Decision & Optimization Platform",
    thesis:
      "The goal is not to give the user more fantasy data. It is to turn the data into a decision.",
    description:
      "A personal product in development that combines league-specific data, player valuation, Monte Carlo simulation, and optimization to help fantasy players make better roster decisions.",
    tags: [
      "Product Strategy",
      "Sports Data",
      "Simulation",
      "APIs",
      "Optimization",
    ],
    featured: true,
    inDevelopment: true,
    sequence: 4,
    kind: "built",
    hero: {
      src: asset("images/quantum-gm/dashboard.png"),
      alt: "Quantum GM dashboard showing team assessment, roster DNA, and a recommended trade",
      title: "Team dashboard",
      caption:
        "Turns league-specific roster reality into a diagnosis: where the team is strong, where it is thin, and what move would actually help.",
    },
    tour: [
      {
        src: asset("images/quantum-gm/dashboard.png"),
        alt: "Quantum GM dashboard with team rating, roster DNA, and best-move recommendation",
        title: "Team / dashboard",
        caption:
          "Turns league-specific roster reality into a diagnosis: where the team is strong, where it is thin, and what move would actually help.",
      },
      {
        src: asset("images/quantum-gm/trade-analysis.png"),
        alt: "Quantum GM trade analysis with a strong-fit verdict and roster impact comparison",
        title: "Decision output",
        caption:
          "Evaluates a candidate trade against the user's actual roster construction — not a generic ranking comparison.",
      },
    ],
    featureShots: [
      {
        src: asset("images/quantum-gm/trade-analysis.png"),
        alt: "Quantum GM trade analysis with a strong-fit verdict and roster impact comparison",
        title: "Scenario evaluation",
        caption:
          "The recommendation is only useful if the user can see why the move changes this roster.",
      },
    ],
  },
];

export const builtProjects = projects.filter((project) => project.kind === "built");

export const leadershipProject = projects.find((project) => project.kind === "leadership")!;

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string) => {
  const built = builtProjects;
  const index = built.findIndex((project) => project.slug === slug);
  if (index === -1) return built[0];
  return built[(index + 1) % built.length];
};

export { confidentialityCopy };

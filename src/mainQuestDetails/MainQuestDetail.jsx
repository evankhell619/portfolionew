import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

const arpayProject = {
  title: "ARPAY REQUEST PAYMENT",
  titleLines: ["ARPAY", "REQUEST PAYMENT"],
  category: ".NET Application",
  heroImg: "/Main_Quest/RP/1.png",
  tagline:
    "ARPAY is a finance division superapp, and Request Payment is one of its sub-modules for managing payment request workflows digitally from data input and approval to status tracking and payment documentation.",
  year: "2025",
  stack: [".NET", "C#", "ASP.NET Core", "Sneat", "SQL Server", "Microsoft Entra", "Power BI"],
  features: [
    "Digital request payment flow covering request input, review, approval, status tracking, and payment documentation.",
    "Single request mode for submitting individual payment requests with structured data, validation, and supporting documentation.",
    "Bulk request mode for processing multiple payment requests more efficiently when finance needs to handle high-volume submissions.",
    "Approval menu with multi-level approval flow to keep finance decisions structured, traceable, and aligned with internal authorization rules.",
    "Master data management for maintaining reusable finance references used across payment request forms and approval flows.",
    "Status tracking for monitoring each request from submission until completion, reducing manual follow-up between teams.",
    "Power BI report integration to help finance monitor request volume, payment status, and operational trends from the same ecosystem.",
    "User accounts integrated with Microsoft Entra so access can follow company identity and permission management.",
    "Sneat-based interface for a clean dashboard experience with practical forms, tables, and workflow-oriented screens.",
  ],
  impact: [
    "Helps the finance division work in a more organized way by centralizing payment request data and documentation.",
    "Speeds up payment request handling through digital approvals, clearer status visibility, and bulk processing support.",
    "Reduces manual errors by standardizing request input, approval steps, and payment documentation in one application.",
  ],
  links: {
    live: "",
    repo: "",
  },
};

const arpayScreenshots = [
  "/Main_Quest/RP/1.png",
  "/Main_Quest/RP/2.png",
  "/Main_Quest/RP/3.png",
  "/Main_Quest/RP/4.png",
  "/Main_Quest/RP/5.png",
];

const ArpayScreenshots = (
  <section>
    <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
      <span className="w-6 h-[1px] bg-black/20" /> Visual Preview
    </h2>
    <div className="grid md:grid-cols-2 gap-4">
      {arpayScreenshots.map((src, index) => (
        <div key={src} className="aspect-video overflow-hidden rounded-md border border-black/10 bg-white">
          <img
            src={src}
            alt={`ARPAY request payment preview ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  </section>
);

const buildProject = (metadata) => {
  if (metadata?.slug === "dotnet-01") {
    return arpayProject;
  }

  const isDotnet = metadata?.category === ".NET";
  const categoryLabel = isDotnet ? ".NET Application" : "PowerApps Application";

  return {
    title: metadata?.title || "Main Quest",
    category: categoryLabel,
    heroImg: metadata?.img || "/placeholder.svg",
    tagline: isDotnet
      ? "A current .NET application built for internal operational workflows, focused on reliability, structured data handling, and division-specific business processes."
      : "A current PowerApps solution built for internal division workflows, helping teams capture, access, and manage operational data through practical low-code applications.",
    year: "Current",
    stack: isDotnet
      ? [".NET", "C#", "API Integration", "Database Workflow", "Internal Tools"]
      : ["PowerApps", "Power Automate", "Microsoft 365", "SharePoint / Dataverse", "Internal Tools"],
    features: isDotnet
      ? [
        "Division-specific workflow modules tailored to current operational needs.",
        "Structured data processing for internal records, requests, and reporting flows.",
        "Backend logic designed to support reliable business operations.",
        "Role-aware interfaces and practical screens for daily team usage.",
      ]
      : [
        "Low-code application screens tailored for a specific department workflow.",
        "Form-based data capture with validation and cleaner operational handoff.",
        "Power Automate flows to reduce repetitive manual steps.",
        "Integration with Microsoft ecosystem data sources used by internal teams.",
      ],
    impact: [
      "Supports faster day-to-day work across business divisions.",
      "Improves consistency in how operational data is captured and reviewed.",
      "Reduces manual coordination by moving recurring processes into digital tools.",
    ],
    links: {
      live: "",
      repo: "",
    },
  };
};

export default function MainQuestDetail({ metadata, onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={buildProject(metadata)}
      preFeatureSection={metadata?.slug === "dotnet-01" ? ArpayScreenshots : undefined}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}

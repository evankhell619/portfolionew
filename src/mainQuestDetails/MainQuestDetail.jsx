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

const cashAdvanceProject = {
  title: "ARPAY CASH ADVANCE",
  titleLines: ["ARPAY", "CASH ADVANCE"],
  category: ".NET Application",
  heroImg: "/Main_Quest/CA/1.png",
  tagline:
    "ARPAY is a finance division superapp, and Cash Advance is one of its sub-modules for managing advance payment requests, settlements, approvals, reporting, and finance documentation.",
  year: "2025",
  stack: [".NET", "C#", "ASP.NET Core", "Sneat", "SQL Server", "Microsoft Entra", "Power BI"],
  features: [
    "Cash Advance Request menu for submitting advance fund requests with structured transaction data and supporting documents.",
    "Cash Advance Settlement menu for reconciling advance funds when there is remaining money to return or additional shortage to settle.",
    "Approval Request menu with multi-level approval flow for reviewing and authorizing cash advance requests.",
    "Approval Settlement menu with approval levels for validating settlement results before the process is finalized.",
    "Supports two transaction types, cash and transfer, so finance can handle different payment methods in one workflow.",
    "Master data management for maintaining reusable finance references used across request, settlement, and approval flows.",
    "Power BI report integration to help finance monitor cash advance requests, settlements, approval progress, and operational trends.",
    "User accounts integrated with Microsoft Entra so access can follow company identity and permission management.",
    "Sneat-based interface for a clean dashboard experience with practical forms, tables, and workflow-oriented screens.",
  ],
  impact: [
    "Helps finance manage cash advance requests and settlements in one structured digital workflow.",
    "Improves control over advance funds by separating request approval and settlement approval processes.",
    "Reduces manual reconciliation errors by documenting cash, transfer, remaining fund, and shortage scenarios more clearly.",
  ],
  links: {
    live: "",
    repo: "",
  },
};

const expenseClaimProject = {
  title: "ARPAY EXPENSE CLAIM",
  titleLines: ["ARPAY", "EXPENSE CLAIM"],
  category: ".NET Application",
  heroImg: "/Main_Quest/EC/1.png",
  tagline:
    "ARPAY is a finance division superapp, and Expense Claim is one of its sub-modules for managing employee reimbursement claims with structured submission, approval, tracking, and finance documentation.",
  year: "2025",
  stack: [".NET", "C#", "ASP.NET Core", "Sneat", "SQL Server", "Microsoft Entra", "Power BI"],
  features: [
    "Expense claim request flow for reimbursement submissions with structured claim data, supporting documents, and finance validation.",
    "Internal employee claim creation, where only internal employees can directly create reimbursement claims in the system.",
    "External claim support through internal request creation, so external parties can still be processed when an internal employee submits the claim on their behalf.",
    "Multi-level approval flow to keep reimbursement review structured, traceable, and aligned with internal authorization rules.",
    "Log history for recording claim activity, status changes, approval movement, and important process updates.",
    "Master data management for maintaining reusable finance references used across claim forms, approval flows, and reporting.",
    "Power BI report integration to help finance monitor claim volume, claim status, reimbursement trends, and operational performance.",
    "User accounts integrated with Microsoft Entra so access can follow company identity and permission management.",
    "Sneat-based interface for a clean dashboard experience with practical forms, tables, and workflow-oriented screens.",
  ],
  impact: [
    "Helps finance manage reimbursement claims in a more organized and traceable digital workflow.",
    "Improves control over who can submit claims directly while still supporting external reimbursement scenarios through internal users.",
    "Reduces manual follow-up by making claim history, approval progress, and documentation easier to review.",
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

const cashAdvanceScreenshots = [
  "/Main_Quest/CA/1.png",
  "/Main_Quest/CA/2.png",
  "/Main_Quest/CA/3.png",
  "/Main_Quest/CA/4.png",
  "/Main_Quest/CA/5.png",
  "/Main_Quest/CA/6.png",
];

const expenseClaimScreenshots = [
  "/Main_Quest/EC/1.png",
  "/Main_Quest/EC/2.png",
  "/Main_Quest/EC/3.png",
  "/Main_Quest/EC/4.png",
  "/Main_Quest/EC/5.png",
];

const createScreenshotSection = (screenshots, altLabel) => (
  <section>
    <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
      <span className="w-6 h-[1px] bg-black/20" /> Visual Preview
    </h2>
    <div className="grid md:grid-cols-2 gap-4">
      {screenshots.map((src, index) => (
        <div key={src} className="aspect-video overflow-hidden rounded-md border border-black/10 bg-white">
          <img
            src={src}
            alt={`${altLabel} preview ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  </section>
);

const ArpayScreenshots = createScreenshotSection(arpayScreenshots, "ARPAY request payment");
const CashAdvanceScreenshots = createScreenshotSection(cashAdvanceScreenshots, "ARPAY cash advance");
const ExpenseClaimScreenshots = createScreenshotSection(expenseClaimScreenshots, "ARPAY expense claim");

const buildProject = (metadata) => {
  if (metadata?.slug === "dotnet-01") {
    return arpayProject;
  }

  if (metadata?.slug === "dotnet-02") {
    return cashAdvanceProject;
  }

  if (metadata?.slug === "dotnet-03") {
    return expenseClaimProject;
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
  const preFeatureSectionBySlug = {
    "dotnet-01": ArpayScreenshots,
    "dotnet-02": CashAdvanceScreenshots,
    "dotnet-03": ExpenseClaimScreenshots,
  };

  return (
    <ProjectCaseLayout
      project={buildProject(metadata)}
      preFeatureSection={preFeatureSectionBySlug[metadata?.slug]}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}

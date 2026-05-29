import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

const buildProject = (metadata) => {
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
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}

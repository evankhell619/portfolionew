import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Girl Boss",
  category: "Beauty Service Website",
  heroImg: "/Side_Quest/1/1.png",
  tagline:
    "A polished Next.js website for a Nail Art and Eyelash Extension studio, designed to showcase services, pricing, visual references, and booking-oriented information in one clean experience.",
  year: "2025",
  stack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Responsive UI",
    "Service Landing Page",
  ],
  features: [
    "Service-focused landing page for nail art and eyelash extension offers.",
    "Visual-first layout that highlights treatment results, brand mood, and beauty service details.",
    "Responsive sections for service descriptions, pricing context, studio information, and contact flow.",
    "Clean navigation structure so visitors can quickly understand available services before booking.",
    "Built with reusable Next.js and React components for easier content updates.",
  ],
  impact: [
    "Helps the studio present a more professional digital presence to potential customers.",
    "Makes service information easier to scan across mobile and desktop devices.",
    "Supports customer decision-making with clearer visuals and more organized service content.",
  ],
  links: {
    live: "",
    repo: "",
  },
};

const screenshots = [
  "/Side_Quest/1/1.png",
  "/Side_Quest/1/2.png",
  "/Side_Quest/1/3.png",
  "/Side_Quest/1/4.png",
  "/Side_Quest/1/5.JPG",
  "/Side_Quest/1/6.jpeg",
  "/Side_Quest/1/7.jpeg",
  "/Side_Quest/1/8.jpeg",
];

const GirlBossScreenshots = (
  <section>
    <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
      <span className="w-6 h-[1px] bg-black/20" /> Visual Preview
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {screenshots.map((src, index) => (
        <div key={src} className="aspect-[4/5] overflow-hidden rounded-md border border-black/10 bg-white">
          <img
            src={src}
            alt={`Girl Boss preview ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  </section>
);

export default function DiabetesClassificationDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      preFeatureSection={GirlBossScreenshots}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}

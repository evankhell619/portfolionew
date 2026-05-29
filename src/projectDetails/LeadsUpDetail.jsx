import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "JoyHub",
  category: "Movie Discovery App",
  heroImg: "/Side_Quest/2/1.png",
  tagline:
    "A React + Vite movie discovery app integrated with the TMDB API, automatically surfacing new movie data, trailers, casts, synopses, and favorites in a polished browsing experience.",
  year: "2025",
  stack: ["React", "Vite", "Material UI", "TMDB API", "YouTube Trailer Embed", "Authentication", "Dark / Light Mode"],
  features: [
    "TMDB API integration keeps movie listings, metadata, cast information, and new releases automatically updated.",
    "User login flow for saving favorite movies, actors, and personal watch references.",
    "Movie search and actor search to explore who plays in a title and discover related filmographies.",
    "Trailer playback integrated with YouTube so users can preview movies directly from the app.",
    "Dark mode and light mode support for a more comfortable browsing experience.",
    "Focuses on discovery content such as trailers, synopsis, cast, ratings, and metadata; it does not stream full movies.",
  ],
  impact: [
    "Gives users one place to browse movie information without manually checking multiple sources.",
    "Improves discovery by connecting titles, actors, trailers, and favorites in a single interface.",
    "Keeps content fresh because data follows TMDB updates rather than static manual entries.",
  ],
  links: {
    live: "",
    repo: "",
  },
};

const screenshots = [
  "/Side_Quest/2/1.png",
  "/Side_Quest/2/2.png",
  "/Side_Quest/2/3.png",
  "/Side_Quest/2/4.png",
  "/Side_Quest/2/5.png",
  "/Side_Quest/2/6.png",
];

const JoyHubScreenshots = (
  <section>
    <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
      <span className="w-6 h-[1px] bg-black/20" /> Visual Preview
    </h2>
    <div className="grid md:grid-cols-2 gap-4">
      {screenshots.map((src, index) => (
        <div key={src} className="aspect-video overflow-hidden rounded-md border border-black/10 bg-white">
          <img
            src={src}
            alt={`JoyHub preview ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  </section>
);

export default function LeadsUpDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      preFeatureSection={JoyHubScreenshots}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}

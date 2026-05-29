import { Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectRouteConfig } from "./projectRegistry";

const LoadingState = () => (
  <div className="p-8 text-center text-sm font-bold uppercase tracking-[0.2em]">
    Loading project...
  </div>
);

export default function ProjectDetailRouter({ mode = "page" }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const routeConfig = getProjectRouteConfig(slug);

  if (!routeConfig?.Component) return null;

  const handleClose = () => {
    if (mode === "modal") navigate(-1);
    else navigate(`/?scrollTo=${routeConfig.scrollTarget || `project-${routeConfig.id}`}`);
  };

  const ProjectComponent = routeConfig.Component;

  return (
    <Suspense fallback={<LoadingState />}>
      <ProjectComponent mode={mode} onClose={handleClose} metadata={routeConfig} />
    </Suspense>
  );
}

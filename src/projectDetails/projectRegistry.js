import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";
import { MAIN_QUEST_META_BY_SLUG } from "../data/mainQuestMeta";

const PROJECT_DETAIL_COMPONENTS = {
  "girl-boss": lazy(() => import("./DiabetesClassificationDetail")),
  leadsup: lazy(() => import("./LeadsUpDetail")),
  polsekrembang: lazy(() => import("./PolsekRembangDetail")),
  floodsegmen: lazy(() => import("./FloodSegmenDetail")),
  qmeal: lazy(() => import("./QMealDetail")),
  lostandfound: lazy(() => import("./LostAndFoundDetail")),
  imageclas: lazy(() => import("./ImageClasDetail")),
  "financial-assistant-bot": lazy(() => import("./FinancialAssistantDetail")),
};

const MainQuestDetail = lazy(() => import("./MainQuestDetail"));

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (metadata) {
    return {
      ...metadata,
      Component: PROJECT_DETAIL_COMPONENTS[slug],
      scrollTarget: `side-quest-${metadata.id}`,
    };
  }

  const mainQuestMetadata = MAIN_QUEST_META_BY_SLUG[slug];
  if (!mainQuestMetadata) return null;

  return {
    ...mainQuestMetadata,
    Component: MainQuestDetail,
    scrollTarget: `main-quest-${mainQuestMetadata.id}`,
  };
}

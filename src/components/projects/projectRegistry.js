import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../../data/projectMeta";
import { MAIN_QUEST_META_BY_SLUG } from "../../data/mainQuestMeta";

const SIDE_QUEST_DETAIL_COMPONENTS = {
  "girl-boss": lazy(() => import("../../sideQuestDetails/DiabetesClassificationDetail")),
  leadsup: lazy(() => import("../../sideQuestDetails/LeadsUpDetail")),
  polsekrembang: lazy(() => import("../../sideQuestDetails/PolsekRembangDetail")),
};

const MainQuestDetail = lazy(() => import("../../mainQuestDetails/MainQuestDetail"));

export function getProjectRouteConfig(slug) {
  const sideQuestMetadata = PROJECT_META_BY_SLUG[slug];
  if (sideQuestMetadata) {
    return {
      ...sideQuestMetadata,
      Component: SIDE_QUEST_DETAIL_COMPONENTS[slug],
      scrollTarget: `side-quest-${sideQuestMetadata.id}`,
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

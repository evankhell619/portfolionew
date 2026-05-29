export const MAIN_QUEST_META = [
  ...Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    slug: `dotnet-${String(index + 1).padStart(2, "0")}`,
    title: `.NET ${String(index + 1).padStart(2, "0")}`,
    category: ".NET",
    color: "bg-purple-400",
    img: "/placeholder.svg",
  })),
  ...Array.from({ length: 8 }, (_, index) => ({
    id: index + 6,
    slug: `powerapps-${String(index + 1).padStart(2, "0")}`,
    title: `PowerApps ${String(index + 1).padStart(2, "0")}`,
    category: "PowerApps",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  })),
];

export const MAIN_QUEST_META_BY_SLUG = MAIN_QUEST_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});

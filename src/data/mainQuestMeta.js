export const MAIN_QUEST_META = [
  {
    id: 1,
    slug: "dotnet-01",
    title: "ARPAY REQUEST PAYMENT",
    category: ".NET",
    color: "bg-purple-400",
    img: "/Main_Quest/RP/1.png",
  },
  {
    id: 2,
    slug: "dotnet-02",
    title: "ARPAY CASH ADVANCE",
    category: ".NET",
    color: "bg-purple-400",
    img: "/Main_Quest/CA/1.png",
  },
  {
    id: 3,
    slug: "dotnet-03",
    title: "ARPAY EXPENSE CLAIM",
    category: ".NET",
    color: "bg-purple-400",
    img: "/Main_Quest/EC/1.png",
  },
  ...Array.from({ length: 2 }, (_, index) => ({
    id: index + 4,
    slug: `dotnet-${String(index + 4).padStart(2, "0")}`,
    title: `.NET ${String(index + 4).padStart(2, "0")}`,
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

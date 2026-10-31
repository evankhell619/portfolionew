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
  },

  // PowerApps Applications
  {
    id: 6,
    slug: "powerapps-01",
    title: "X-CLAIM",
    category: "PowerApps",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  },
  {
    id: 7,
    slug: "powerapps-02",
    title: "EMAS",
    category: "PowerApps",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  },
  {
    id: 8,
    slug: "powerapps-03",
    title: "AP-INVOICE",
    category: "PowerApps",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  },
  {
    id: 9,
    slug: "powerapps-04",
    title: "PRINT TO PDF",
    category: "PowerApps",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  },
  {
    id: 10,
    slug: "powerapps-05",
    title: "AWAS",
    category: "PowerApps",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  },
  {
    id: 11,
    slug: "powerapps-06",
    title: "E-BUDGET",
    category: "PowerApps",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  },
  {
    id: 12,
    slug: "powerapps-07",
    title: "HAZARD",
    category: "PowerApps",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  },
  {
    id: 13,
    slug: "powerapps-08",
    title: "ANSI",
    category: "PowerApps",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  },
];

export const MAIN_QUEST_META_BY_SLUG = MAIN_QUEST_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});

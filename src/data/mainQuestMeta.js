export const MAIN_QUEST_META = [
  // .NET Applications
  {
    id: 1,
    slug: "dotnet-01",
    title: "AR-PAY",
    category: ".NET",
    color: "bg-purple-400",
    img: "/placeholder.svg",
  },
  {
    id: 2,
    slug: "dotnet-02",
    title: "MATA AIR HUB",
    category: ".NET",
    color: "bg-purple-400",
    img: "/placeholder.svg",
  },
  {
    id: 3,
    slug: "dotnet-03",
    title: "ECOSYSTEM",
    category: ".NET",
    color: "bg-purple-400",
    img: "/placeholder.svg",
  },
  {
    id: 4,
    slug: "dotnet-04",
    title: "ATOMS",
    category: ".NET",
    color: "bg-purple-400",
    img: "/placeholder.svg",
  },
  {
    id: 5,
    slug: "dotnet-05",
    title: "MATA AIR V2",
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

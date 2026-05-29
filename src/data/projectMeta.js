export const PROJECT_META = [
  {
    id: 1,
    slug: "girl-boss",
    title: "Girl Boss",
    category: "Beauty Service Website",
    color: "bg-pink-400",
    img: "/Side_Quest/1/1.png",
  },
  {
    id: 2,
    slug: "leadsup",
    title: "JoyHub",
    category: "Movie Discovery App",
    color: "bg-purple-400",
    img: "/Side_Quest/2/1.png",
  },
  {
    id: 3,
    slug: "polsekrembang",
    title: "Polsek Rembang Virtual Assistant",
    category: "RAG Chatbot / AI Assistant",
    color: "bg-orange-400",
    img: "/placeholder.svg",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});

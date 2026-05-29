export const PROJECT_META = [
  {
    id: 1,
    slug: "diabetes-classification",
    title: "Diabetes Classification",
    category: "AI / Machine Learning",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  },
  {
    id: 2,
    slug: "leadsup",
    title: "LeadsUp",
    category: "AI-Powered Lead Scoring",
    color: "bg-purple-400",
    img: "/placeholder.svg",
  },
  {
    id: 3,
    slug: "polsekrembang",
    title: "Polsek Rembang Virtual Assistant",
    category: "RAG Chatbot / AI Assistant",
    color: "bg-orange-400",
    img: "/placeholder.svg",
  },
  {
    id: 4,
    slug: "floodsegmen",
    title: "Flood Segmentation Analyzer",
    category: "Computer Vision",
    color: "bg-blue-400",
    img: "/placeholder.svg",
  },
  {
    id: 5,
    slug: "qmeal",
    title: "QMeal E-Kantin",
    category: "Multi-Vendor Ordering Platform",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  },
  {
    id: 6,
    slug: "lostandfound",
    title: "SITEMU Lost & Found Portal",
    category: "Web Application",
    color: "bg-cyan-400",
    img: "/placeholder.svg",
  },
  {
    id: 7,
    slug: "imageclas",
    title: "Vegetable Image Classification",
    category: "Computer Vision",
    color: "bg-pink-400",
    img: "/placeholder.svg",
  },
  {
    id: 8,
    slug: "financial-assistant-bot",
    title: "Financial Assistant Bot",
    category: "AI / Fintech",
    color: "bg-amber-400",
    img: "/placeholder.svg",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});

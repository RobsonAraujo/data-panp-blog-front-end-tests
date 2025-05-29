import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [
  {
    label: "Engenharia de Dados",
    tag: "engenharia-de-dados",
    description: "Tecnologias e práticas modernas na engenharia de dados e IA.",
  },
  {
    label: "Carreiras e Vagas",
    tag: "carreiras-e-vagas",
    description:
      "Tendências de mercado e oportunidades de trabalho em dados e IA.",
  },
  {
    label: "Ética e IA Responsável",
    tag: "etica-e-ia",
    description:
      "Discussões sobre o uso ético e responsável da inteligência artificial.",
  },
  {
    label: "Tutoriais e Guias",
    tag: "tutoriais-e-guias",
    description:
      "Conteúdo educativo sobre ciência de dados, IA e ferramentas práticas.",
  },
  {
    label: "Tendências e Inovação",
    tag: "tendencias-inovacao",
    description:
      "Novidades do mercado de dados, IA, automação e transformação digital.",
  },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "clvlugru90000o4g8ahxp069s",
  baseUrl,
  logoUrl: urlJoin(baseUrl, "logo.png"),
  organization: process.env.NEXT_PUBLIC_BLOG_ORGANIZATION || "Example Org",
  title: process.env.NEXT_PUBLIC_BLOG_TITLE || "Launched",
  description:
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Let's build something amazing!",
  categories,
};

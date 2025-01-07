import { PROJECT } from "@/constants/project";

const generateTitle = (titles) => {
  return `${titles.join(" | ")} | ${PROJECT?.name}`;
};

export default generateTitle;

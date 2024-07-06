import { project } from "@/constants/project";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function titleGenerator(titles) {
  return `${titles.join(" | ")} | ${project?.name}`;
}

export function pathProcessor(path = "") {
  return path?.replace(/^\/|\/$/g, "");
}

export function joinPaths(paths = []) {
  if (!paths.length) {
    return "";
  }
  const processedPaths = [];
  paths?.forEach((path) => path && processedPaths.push(pathProcessor(path)));
  return pathProcessor(processedPaths.join("/"));
}

export function activePathChecker(currentPath, path) {
  if (!currentPath || !path) {
    return false;
  } else {
    return (
      pathProcessor(currentPath) === pathProcessor(path) ||
      pathProcessor(currentPath).startsWith(pathProcessor(path) + "/")
    );
  }
}

export function roleChecker(role, userRole) {
  if (!role || !role?.length) {
    return true;
  }
  return userRole && role.includes(userRole);
}

export function toFixedAndLocaleStringCurrency(
  value = 0,
  fixed = 2,
  language = "en-US",
  currency,
) {
  if (currency) {
    return Number(Number(value).toFixed(fixed)).toLocaleString(language, {
      style: "currency",
      currency: currency,
    });
  } else {
    return Number(Number(value).toFixed(fixed)).toLocaleString(language);
  }
}

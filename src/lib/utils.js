import { project } from "@/constants/project"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function toFixedAndLocaleStringCurrency(value = 0, fixed = 2, currency) {
  if(currency) {
    return Number(Number(value).toFixed(fixed)).toLocaleString("en-US", {
      style: "currency",
      currency: currency,
    })
  }else {
    return Number(Number(value).toFixed(fixed)).toLocaleString("en-US")
  }
};

export function titleGenerator(titles) {
  return `${titles.join(" | ")} | ${project?.name}`;
}
"use client";

import { Button } from "@/components/ui/Button";
import { locales } from "@/constants/locales";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const Language = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathName = usePathname();
  const languageSelector = () => {
    const locale = localeActive === locales[0] ? locales[1] : locales[0];
    startTransition(() => {
      router.replace(pathName.replace(localeActive, locale));
    });
  };

  return (
    <Button
      onClick={() => languageSelector()}
      variant="outline"
      size="sm"
      isLoading={isPending ? true : false}
    >
      {localeActive === "en-US" ? "Български" : "English"}
    </Button>
  );
};

export default Language;

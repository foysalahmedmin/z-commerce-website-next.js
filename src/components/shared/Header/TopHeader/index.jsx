"use client";

import { Mail, PhoneCall } from "lucide-react";
import SelectLanguage from "./SelectLanguage";
import SelectTimezone from "./SelectTimezone";

const TopHeader = () => {
  return (
    <div className="hidden h-10 bg-muted md:block">
      <div className="container h-full">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <PhoneCall className="h-4 w-4" />
              <span className="text-xs">+880 1950601811</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-xs">foysalahmedmin@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <SelectTimezone />
            </div>
            <div>
              <SelectLanguage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

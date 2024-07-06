"use client";

import useMoveToFolder from "@/hooks/useMoveToFolder";
import { cn } from "@/lib/utils";
import pathProcessor from "@/utils/pathProcessor";
import { ChevronRight, Ellipsis, Folder } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";

const breadcrumbItemsGenerator = (path, initialItems = []) => {
  const processedPath = pathProcessor(path);
  const items = [...initialItems];

  if (processedPath == "") {
    return items;
  } else if (processedPath) {
    let currentItemPath = "";
    processedPath.split("/").forEach((path) => {
      currentItemPath += `/${path}`;
      items.push({
        label: path,
        path: path === "" ? "/" : currentItemPath,
      });
    });
    return items;
  }

  return [];
};

const Item = ({
  className,
  currentPath,
  basePath,
  item: { label, path },
  ...props
}) => {
  const { moveToFolderHandler } = useMoveToFolder();
  return (
    <li className={cn("flex items-center gap-1 text-xl", className)} {...props}>
      <Button
        className="text-[1em] text-foreground"
        onClick={() =>
          currentPath !== path && moveToFolderHandler({ basePath, path })
        }
        variant={currentPath !== path ? "link" : "none"}
        size="none"
      >
        {label}
      </Button>
      {currentPath !== path && <ChevronRight className="text-foreground" />}
    </li>
  );
};

const DropItem = ({
  className,
  currentPath,
  basePath,
  item: { label, path },
  ...props
}) => {
  const { moveToFolderHandler } = useMoveToFolder();
  return (
    <li
      onClick={() =>
        currentPath !== path && moveToFolderHandler({ basePath, path })
      }
      className={cn(
        "flex w-full items-center justify-start gap-2 px-4 py-2 text-base hover:bg-muted/15",
        className,
      )}
      {...props}
    >
      <Folder size={16} />
      <span>{label}</span>
    </li>
  );
};

export const Breadcrumb = ({
  basePath = "/my-drive",
  initialItems = [],
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = "/";
  const items = breadcrumbItemsGenerator(currentPath, initialItems) || [];
  return (
    <ul
      className={cn("flex items-center justify-start gap-2", className)}
      {...props}
    >
      {items.length > 3 && (
        <li className="relative flex">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            variant="ghost"
            size="icon-sm"
          >
            <Ellipsis />
          </Button>
          <Dropdown
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            className="left-0 min-w-52 origin-top-left -translate-x-0"
          >
            <ul className="py-2 text-sm">
              {items?.slice(0, -2)?.map((item, i) => (
                <DropItem
                  key={i}
                  currentPath={currentPath}
                  basePath={basePath}
                  item={item}
                />
              ))}
            </ul>
          </Dropdown>
        </li>
      )}
      {items?.length > 3 ? (
        <>
          {items?.slice(-2)?.map((item, i) => (
            <Item
              key={i}
              currentPath={currentPath}
              basePath={basePath}
              item={item}
            />
          ))}
        </>
      ) : (
        <>
          {items?.map((item, i) => (
            <Item
              key={i}
              currentPath={currentPath}
              basePath={basePath}
              item={item}
            />
          ))}
        </>
      )}
    </ul>
  );
};

import { ActiveLink } from "@/components/ui/ActiveLink";
import trimPath from "@/utils/trimPath";
import { ChevronRight } from "lucide-react";

const NavItem = ({ item, setIsOpen }) => {
  const { path, label, children } = item;

  const Comp = path ? ActiveLink : "div";
  return (
    <li className="group flex font-light">
      <Comp
        to={"/" + trimPath(path)}
        className="flex items-center gap-1 text-sm uppercase"
        onClick={() => setIsOpen(false)}
      >
        {label}
        {children && children?.length > 0 && (
          <ChevronRight
            // strokeWidth={1}
            className="size-4 rotate-90 group-hover:-rotate-90"
          />
        )}
      </Comp>
      {children && children?.length > 0 && (
        <div className="invisible absolute -bottom-6 left-0 w-80 translate-y-full rounded-md bg-card p-4 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100 lg:w-[32rem]">
          <ul className="grid w-full grid-cols-2">
            {children.map((child, index) => (
              <li onClick={() => setIsOpen(false)} key={index}>
                <ActiveLink
                  to={"/" + trimPath(child?.path)}
                  className="block space-y-1 rounded-md p-4 px-6 text-sm hover:bg-secondary/50"
                >
                  <div className="uppercase">{child?.label}</div>
                  <p className="text-xs text-muted-foreground">{child?.text}</p>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const NavItems = ({ routes, isOpen, setIsOpen }) => {
  return (
    <>
      {routes?.map((item, index) => (
        <NavItem
          key={index}
          item={item}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ))}
    </>
  );
};

export default NavItems;

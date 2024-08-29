import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const TeamMemberCard = ({ item }) => {
  const { name, image, designation, description, socials } = item;
  return (
    <div className="group/card flex size-full flex-col">
      <div
        className={
          "h-72 w-full overflow-hidden rounded-md border bg-muted/25 p-4 pb-12 shadow-inner dark:bg-background"
        }
      >
        <Image
          className={cn(
            "size-full origin-center object-contain object-center transition-all duration-500 group-hover/card:scale-105 group-hover/card:brightness-95 group-hover/card:delay-200",
          )}
          height={320}
          width={260}
          src={image}
          alt={name}
        />
      </div>
      <div className="relative -mt-12 flex grow flex-col px-4">
        <div className="flex grow flex-col items-center justify-center space-y-2 rounded-md border bg-card px-4 py-4 text-center shadow">
          <div className="grid grow">
            <h3 className="text-base text-title">{name}</h3>
            {description && (
              <p className="text-xs text-title/75">{designation}</p>
            )}
          </div>
          {socials?.length > 0 && (
            <ul className="mt-4 flex items-center justify-center gap-2">
              {socials?.map((item, i) => (
                <li key={i} className="inline-block">
                  <Link
                    href={item?.link}
                    className="text-title/75 hover:text-primary"
                  >
                    {item?.icon}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

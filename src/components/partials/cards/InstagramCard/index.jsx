import { Instagram } from "@/assets/images/icons/Instagram";
import Image from "next/image";
import Link from "next/link";

const InstagramCard = ({ item }) => {
  const { image, name } = item;
  return (
    <div className="group relative aspect-square w-full">
      <Image
        className="size-full"
        width={300}
        height={300}
        src={image}
        alt={name}
      />
      <Link
        href="#"
        className="absolute inset-0 flex cursor-pointer items-center justify-center p-[15%] text-secondary transition-all duration-500 group-hover:bg-dark/25 group-hover:backdrop-blur-[2px]"
      >
        <Instagram className="size-full rotate-[360deg] scale-0 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100" />
      </Link>
    </div>
  );
};

export default InstagramCard;

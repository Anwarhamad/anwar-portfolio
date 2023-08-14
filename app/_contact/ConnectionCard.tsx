import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  description: string;
  icon: ReactNode;
  link: string;
}

function ConnectionCard({ description, icon, link }: Props) {
  return (
    <Link href={link}>
      <div className="flex flex-col gap-8 rounded-lg border border-[#4a0a93] bg-[#4a0a93] p-4 shadow hover:bg-[#4a0a93]/50 md:aspect-square md:justify-center md:text-center">
        <div className="text-3xl md:place-self-center lg:text-5xl">{icon}</div>
        <p className="text-lg tracking-tight text-white">{description}</p>
      </div>
    </Link>
  );
}

export default ConnectionCard;

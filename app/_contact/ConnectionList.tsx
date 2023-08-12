import type { ReactNode } from "react";

import ConnectionCard from "@/app/_contact/ConnectionCard";

interface Props {
  connections: {
    description: string;
    icon: ReactNode;
    id: number;
    link: string;
  }[];
}

function ConnectionList({ connections }: Props) {
  return (
    <section
      id="contact"
      className="flex h-max min-h-screen w-10/12 flex-col justify-center"
    >
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {connections.map(({ description, icon, id, link }) => (
            <ConnectionCard
              key={id}
              icon={icon}
              description={description}
              link={link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConnectionList;

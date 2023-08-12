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
  );
}

export default ConnectionList;

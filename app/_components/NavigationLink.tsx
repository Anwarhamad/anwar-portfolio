import type { ReactNode } from "react";

interface Props {
  id: string;
  icon: ReactNode;
  active: boolean;
}

function NavLink({ id, icon, active }: Props) {
  return (
    <li>
      <a
        href={`#${id}`}
        className={`text-2xl ${active ? "text-white" : "text-white/50"}`}
      >
        {icon}
      </a>
    </li>
  );
}

export default NavLink;

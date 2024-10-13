"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const path = usePathname();

  return (
    <div className="mb-2">
      <Link
        href="/schedule/all"
        className={`link ${path.startsWith("/schedule") ? "font-bold" : ""}`}
      >
        Schedule
      </Link>
      {" | "}
      <Link
        href="/talents/all"
        className={`link ${path.startsWith("/talents") ? "font-bold" : ""}`}
      >
        Talents
      </Link>
    </div>
  );
}

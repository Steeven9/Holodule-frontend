"use client";

import { usePathname, useRouter } from "next/navigation";

export default function BranchButtons() {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="mb-4">
      <span>Branch:</span>
      <select
        className="text-black ml-2"
        onChange={(e) => router.push(e.target.value)}
        defaultValue={path}
      >
        <option value="/sch/all">All</option>
        <option value="/sch/jp">HoloJP</option>
        <option value="/sch/en">HoloEN</option>
        <option value="/sch/id">HoloID</option>
        <option value="/sch/stars">Stars</option>
        <option value="/sch/stars_jp">Stars JP</option>
        <option value="/sch/stars_en">Stars EN</option>
      </select>
    </div>
  );
}

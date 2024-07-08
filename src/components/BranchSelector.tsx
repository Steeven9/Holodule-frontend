"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function BranchSelector() {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  function handleShowPast() {
    const newPath = searchParams.has("all") ? path : `${path}?all`;
    router.push(newPath);
  }

  return (
    <div className="mb-4">
      <label htmlFor="branch" className="mb-2 font-medium">
        Branch
      </label>
      <select
        id="branch"
        className="ml-2 border rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
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

      <button className="ml-4 button" onClick={handleShowPast}>
        {searchParams.has("all") ?? false ? "Hide past" : "Show past"}
      </button>
    </div>
  );
}

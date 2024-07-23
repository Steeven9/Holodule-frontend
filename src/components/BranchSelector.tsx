"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ShowPastButton() {
  //using useSearchParams requires the component to be in a Suspense boundary
  // ¯\_(ツ)_/¯
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  function handleShowPast() {
    const newPath = searchParams.has("all") ? path : `${path}?all`;
    router.push(newPath);
  }

  return (
    <button className="ml-4 button" onClick={handleShowPast}>
      {searchParams.has("all") ?? false ? "Hide past" : "Show past"}
    </button>
  );
}

export default function BranchSelector() {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="mb-4">
      <select
        id="branch"
        className="ml-2 border rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => router.push(e.target.value)}
        defaultValue={path}
      >
        <option value="/sch/all">All talents</option>
        <option value="/sch/jp">HoloJP</option>
        <option value="/sch/en">HoloEN</option>
        <option value="/sch/id">HoloID</option>
        <option value="/sch/stars">Stars</option>
        <option value="/sch/stars_jp">Stars JP</option>
        <option value="/sch/stars_en">Stars EN</option>
      </select>

      <Suspense>
        <ShowPastButton />
      </Suspense>
    </div>
  );
}

"use client";

import { TIMEZONE } from "@/lib/config";
import Clock from "react-live-clock";

export default function TimeBar() {
  //TODO picker for timezone
  return (
    <div className="mb-4">
      Current time:{" "}
      <Clock
        format={"DD/MM HH:mm:ss"}
        ticking={true}
        timezone={TIMEZONE}
        noSsr={true}
      />{" "}
      ({TIMEZONE})
    </div>
  );
}

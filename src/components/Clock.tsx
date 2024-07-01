"use client";

import { TIMEZONE } from "@/lib/config";
import { formatDate } from "date-fns";
import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID: NodeJS.Timeout;
    // weird hyrdation error pops if we set it to 1000
    timerID = setInterval(() => setDate(new Date()), 2000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  //TODO picker for timezone
  return (
    <div className="mb-4">
      Current time: {formatDate(date, "dd/MM HH:mm")} - Current timezone:{" "}
      {TIMEZONE}
    </div>
  );
}

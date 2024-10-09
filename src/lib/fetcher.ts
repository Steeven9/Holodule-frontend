import { APIResponse } from "@/types/API";
import moment from "moment-timezone";
import { TIMEZONE } from "./config";

export async function fetchStreams(url: string, includePast = false) {
  const result = await fetch(url, { cache: "no-store" });
  const data = await result.json();
  if (!data || data.dateGroupList.length === 0) {
    console.error("Error fetching streams", data);
    return [];
  }
  const streams = [
    ...data.dateGroupList[0].videoList,
    ...data.dateGroupList[1].videoList,
    ...data.dateGroupList[2].videoList,
  ] as APIResponse[];
  const now = moment();

  const filteredStreams = streams.filter((stream) => {
    const jpDateTime = moment.tz(
      stream.datetime,
      "yyyy/MM/DD HH:mm:ss",
      "Asia/Tokyo",
    );
    const localDateTime = jpDateTime.clone().tz(TIMEZONE);

    // keep only if live, or if stream date is in the future or today (up to this hour)
    return (
      stream.isLive ||
      includePast ||
      localDateTime.isAfter(now) ||
      (localDateTime.isSame(now, "hour") && localDateTime.hour() >= now.hour())
    );
  });

  console.info(
    `Fetched ${streams.length} streams, reducing to ${filteredStreams.length} (include: ${includePast})`,
  );

  return filteredStreams;
}

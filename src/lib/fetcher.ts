import { APIResponse } from "@/types/API";
import { parse } from "date-fns";
import { fromZonedTime } from "date-fns-tz";

export async function fetchStreams(branch: string) {
  const result = await fetch(branch);
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

  return streams.filter((stream) => {
    const zonedDate = parse(stream.datetime, "yyyy/MM/dd HH:mm:ss", new Date());
    const utcDate = fromZonedTime(zonedDate, "Asia/Tokyo");
    const now = new Date();
    // keep only if live, or if stream date is today or future
    return stream.isLive || utcDate.getDate() >= now.getDate();
  });
}

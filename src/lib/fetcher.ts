import { APIResponse } from "@/types/API";

export async function fetchStreams(branch: string) {
  const result = await fetch(branch);
  const data = await result.json();
  if (!data || data.dateGroupList.length === 0) {
    console.error("Error fetching streams", data);
  }
  //TODO filter the ones too far back
  return [
    ...data.dateGroupList[0].videoList,
    ...data.dateGroupList[1].videoList,
    ...data.dateGroupList[2].videoList,
  ] as APIResponse[];
}

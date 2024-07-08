import StreamInfo from "@/components/StreamInfo";
import { BRANCHES } from "@/lib/config";
import { fetchStreams } from "@/lib/fetcher";

interface Props {
  params: { branch: string };
  searchParams: { all?: string };
}

export default async function BranchSchedule({
  params,
  searchParams,
}: Readonly<Props>) {
  const branch = BRANCHES[params.branch];
  const streams = await fetchStreams(
    branch.apiUrl,
    Object.keys(searchParams).includes("all"),
  );

  return (
    <>
      <p className="title">{branch.name}</p>
      {streams.map((stream) => (
        <StreamInfo stream={stream} key={stream.url} />
      ))}
    </>
  );
}

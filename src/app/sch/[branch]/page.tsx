import StreamInfo from "@/components/StreamInfo";
import { BRANCHES } from "@/lib/config";
import { fetchStreams } from "@/lib/fetcher";

interface Props {
  params: { branch: string };
}

export default async function BranchSchedule({ params }: Readonly<Props>) {
  const branch = BRANCHES[params.branch];
  const streams = await fetchStreams(branch.apiUrl);

  return (
    <>
      <p className="title">{branch.name}</p>
      {streams.map((stream) => (
        <StreamInfo stream={stream} key={stream.url} />
      ))}
    </>
  );
}

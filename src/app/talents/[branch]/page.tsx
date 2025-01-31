import { BRANCHES, TALENTS } from "@/lib/config";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { branch: string };
}

export default async function BranchTalents({ params }: Readonly<Props>) {
  const branch = BRANCHES[params.branch];
  if (!branch) {
    notFound();
  }

  const data = TALENTS.filter(
    (talent) =>
      talent.agency &&
      (talent.agency == branch.name || branch.name == "All talents"),
  );

  return (
    <>
      <p className="title">{branch.name}</p>
      {data.map((talent) => (
        <div
          key={talent.name}
          className="mb-8"
          id={talent.nickname ?? talent.name}
        >
          <div className="subtitle">
            {talent.name}
            {talent.fanMark ? ` ${talent.fanMark}` : ""}
          </div>

          <div>
            {talent.agency} gen {talent.generationId}
            {talent.generation ? ` (${talent.generation})` : ""}
            {talent.status != "active" ? ` - ${talent.status}` : ""}
          </div>

          <div className="mt-2">
            {talent.twitterAccount ? (
              <Link
                href={`https://x.com/${talent.twitterAccount}`}
                target="_blank"
                className="link"
              >
                Twitter
              </Link>
            ) : null}

            {talent.youtubeChannel ? (
              <Link
                href={`https://youtube.com/@${talent.youtubeChannel}`}
                target="_blank"
                className="link ml-4"
              >
                YouTube
              </Link>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
}

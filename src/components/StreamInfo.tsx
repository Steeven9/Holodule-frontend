import { TALENTS, TIMEZONE } from "@/lib/config";
import { APIResponse } from "@/types/API";
import { parse } from "date-fns";
import { format, fromZonedTime } from "date-fns-tz";
import Image from "next/image";
import Link from "next/link";

interface Props {
  stream: APIResponse;
}

function parseDate(dateString: string) {
  const zonedDate = parse(dateString, "yyyy/MM/dd HH:mm:ss", new Date());
  const utcDate = fromZonedTime(zonedDate, "Asia/Tokyo");
  return format(utcDate, "dd/MM HH:mm", { timeZone: TIMEZONE });
}

//TODO better live indicator (red dot or smth)
export default function StreamInfo({ stream }: Readonly<Props>) {
  return (
    <div className="mb-8 flex items-center" key={stream.url}>
      <Link href={stream.url} target="_blank">
        <Image
          src={stream.thumbnail}
          width={160}
          height={90}
          className="min-w-[120px]"
          alt="Thumbnail"
        />
      </Link>
      <div className="ml-4">
        <Link href={stream.url} target="_blank" className="link">
          {stream.title.length === 0 ? "<Unknown title>" : stream.title}
        </Link>
        <br />
        {TALENTS[stream.talent.name]?.enName || stream.talent.name}
        <br />
        at {parseDate(stream.datetime)} {stream.isLive ? "(LIVE)" : null}
      </div>
    </div>
  );
}

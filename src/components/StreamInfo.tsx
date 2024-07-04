import defaultThumbnail from "@/img/defaultThumbnail.png";
import liveIcon from "@/img/live.png";
import { TALENTS, TIMEZONE } from "@/lib/config";
import { APIResponse } from "@/types/API";
import { parse } from "date-fns";
import { format, fromZonedTime } from "date-fns-tz";
import Image from "next/image";
import Link from "next/link";
import ImageWithFallback from "./imageWithFallback";

interface Props {
  stream: APIResponse;
}

function parseDate(dateString: string) {
  const zonedDate = parse(dateString, "yyyy/MM/dd HH:mm:ss", new Date());
  const utcDate = fromZonedTime(zonedDate, "Asia/Tokyo");
  return format(utcDate, "dd/MM HH:mm", { timeZone: TIMEZONE });
}

export default function StreamInfo({ stream }: Readonly<Props>) {
  return (
    <div
      className="mb-8 flex items-center"
      key={stream.url + stream.title + stream.datetime}
    >
      <Link href={stream.url} target="_blank">
        <ImageWithFallback
          src={stream.thumbnail}
          fallbackSrc={defaultThumbnail}
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
        <div>{TALENTS[stream.talent.name]?.enName || stream.talent.name}</div>
        <div>
          <span className="align-middle">at {parseDate(stream.datetime)}</span>
          {stream.isLive ? (
            <Image
              src={liveIcon}
              width={35}
              height={15}
              alt="LIVE"
              className="inline-block align-middle ml-2"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

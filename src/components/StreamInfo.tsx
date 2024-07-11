import defaultThumbnail from "@/img/defaultThumbnail.png";
import liveIcon from "@/img/live.png";
import { getTalent, TIMEZONE } from "@/lib/config";
import { APIResponse } from "@/types/API";
import moment from "moment-timezone";
import Image from "next/image";
import Link from "next/link";
import ImageWithFallback from "./imageWithFallback";

interface Props {
  stream: APIResponse;
}

function parseDate(dateString: string) {
  const jpDateTime = moment.tz(dateString, "yyyy/MM/DD HH:mm:ss", "Asia/Tokyo");
  const localDateTime = jpDateTime.clone().tz(TIMEZONE);
  return localDateTime.format("DD/MM HH:mm");
}

export default function StreamInfo({ stream }: Readonly<Props>) {
  const talent = getTalent(stream.talent.name);

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
          className="min-w-[160px]"
          alt="Thumbnail"
        />
      </Link>

      <div className="ml-4 y-s space-y-2">
        <Link href={stream.url} target="_blank" className="link">
          {stream.title.length === 0 ? "<Unknown title>" : stream.title}
        </Link>
        <div>{talent?.nickname ?? stream.talent.name}</div>
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

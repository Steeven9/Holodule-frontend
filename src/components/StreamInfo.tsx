import { TALENTS, TIMEZONE } from "@/lib/config";
import { APIResponse } from "@/types/API";
import { parse } from "date-fns";
import { format, fromZonedTime } from "date-fns-tz";

interface Props {
  stream: APIResponse;
}

function parseDate(dateString: string) {
  const zonedDate = parse(dateString, "yyyy/MM/dd HH:mm:ss", new Date());
  const utcDate = fromZonedTime(zonedDate, "Asia/Tokyo");
  return format(utcDate, "dd/MM HH:mm", { timeZone: TIMEZONE });
}

//TODO add pictures
//TODO add link
//TODO add live indicator
export default function StreamInfo({ stream }: Readonly<Props>) {
  return (
    <div className="mb-8" key={stream.url}>
      {stream.title.length === 0 ? "<Unknown title>" : stream.title}
      <br />
      {TALENTS[stream.talent.name]?.enName || stream.talent.name}
      {stream.collaboTalents.map(
        (talent) => `, ${TALENTS[talent.name]?.enName || talent.name}`,
      )}
      <br />
      at {parseDate(stream.datetime)}
    </div>
  );
}

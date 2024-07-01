import Link from "next/link";

//TODO highlight selected one
export default function BranchButtons() {
  return (
    <div className="space-x-4 mb-4">
      <Link className="link" href="/sch/all">
        All
      </Link>
      <Link className="link" href="/sch/jp">
        HoloJP
      </Link>
      <Link className="link" href="/sch/en">
        HoloEN
      </Link>
      <Link className="link" href="/sch/id">
        HoloID
      </Link>
      <Link className="link" href="/sch/stars">
        Stars
      </Link>
      <Link className="link" href="/sch/stars_jp">
        Stars JP
      </Link>
      <Link className="link" href="/sch/stars_en">
        Stars EN
      </Link>
    </div>
  );
}

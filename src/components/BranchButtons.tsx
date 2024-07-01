import Link from "next/link";

//TODO highlight selected one
export default function BranchButtons() {
  return (
    <div className="mb-4">
      <Link className="link mr-2" href="/sch/all">
        All
      </Link>
      <Link className="link mr-2" href="/sch/jp">
        HoloJP
      </Link>
      <Link className="link mr-2" href="/sch/en">
        HoloEN
      </Link>
      <Link className="link mr-2" href="/sch/id">
        HoloID
      </Link>
      <Link className="link mr-2" href="/sch/stars">
        Stars
      </Link>
      <Link className="link mr-2" href="/sch/stars_jp">
        Stars JP
      </Link>
      <Link className="link mr-2" href="/sch/stars_en">
        Stars EN
      </Link>
    </div>
  );
}

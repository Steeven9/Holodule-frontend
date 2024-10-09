import BranchSchedule from "./sch/[branch]/page";

interface Props {
  params: { branch: string };
  searchParams: { all?: string };
}

export default function Home({ searchParams }: Readonly<Props>) {
  return (
    <BranchSchedule params={{ branch: "all" }} searchParams={searchParams} />
  );
}

import BranchSchedule from "./sch/[branch]/page";

export default function Home() {
  return <BranchSchedule params={{ branch: "all" }} searchParams={{}} />;
}

import BranchSchedule from "./sch/[branch]/page";

export default async function Home() {
  return <BranchSchedule params={{ branch: "all" }} />;
}

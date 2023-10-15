import UsersList from "./UsersList";
import Link from "next/link";
type Props = {
  searchParams: { sortOrder: string };
};
export default async function Users(props: Props) {
  const {
    searchParams: { sortOrder },
  } = props;
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex gap-8">
        <Link href={"/users?sortOrder=email"}>Sort By Email</Link>
        <Link href={"/users?sortOrder=name"}>Sort By Name</Link>
      </div>
      <UsersList sortOrder={sortOrder} />
    </div>
  );
}

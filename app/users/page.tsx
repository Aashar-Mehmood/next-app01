import { Suspense } from "react";

import Link from "next/link";
import UsersList from "../components/UsersList";
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
      <Suspense fallback={<h1 className="text-red-600">Loading Users ...</h1>}>
        <UsersList sortOrder={sortOrder} />
      </Suspense>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sit
        distinctio dicta ullam consectetur officiis quidem quis, suscipit
        molestiae a! Quia nisi assumenda, deserunt corporis modi eligendi
        laudantium harum dolorem cupiditate doloribus temporibus, voluptatum
        quod ipsa. Repudiandae aperiam asperiores cum possimus quod minima ab
        enim, hic rerum non! Corrupti, quia.
      </h3>
    </div>
  );
}

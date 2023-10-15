import React from "react";
type User = {
  id: number;
  name: string;
  email: string;
};
type Props = {
  sortOrder: string;
};
async function UsersList({ sortOrder }: Props) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  const sortedUsers =
    sortOrder === "email"
      ? users.sort((a, b) => a.email.localeCompare(b.email))
      : users.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex flex-wrap gap-6">
      {sortedUsers.map((user) => {
        return (
          <div key={user.id} className="bg-slate-100 rounded shadow p-4">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UsersList;

import { getUsers } from "@/lib/api";
import { sortUsers } from "@/lib/helperFunctions";
import { toast } from "react-toastify";
import ToastMessage from "./ToastMessage";

type User = {
  id: number;
  name: string;
  email: string;
};
type Props = {
  sortOrder: string;
};
async function UsersList({ sortOrder }: Props) {
  let data: any;
  try {
    const users = await getUsers();
    const sortedUsers = sortUsers(users, sortOrder);
    data =
      Array.isArray(sortedUsers) &&
      sortedUsers.map((user: User) => {
        return (
          <div key={user.id} className="bg-slate-100 rounded shadow p-4">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        );
      });
  } catch (error: any) {
    console.log(error?.message);
    data = <ToastMessage type="error" message={error?.message} />;
  }

  return <div className="flex flex-wrap gap-6">{data}</div>;
}

export default UsersList;

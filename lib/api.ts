import { API_BASE_URL } from "@/constants";

export type User = {
  id: number;
  name: string;
  email: string;
};
export async function getUsers() {
  const response = await fetch(`${API_BASE_URL}/users`, {
    cache: "no-store",
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

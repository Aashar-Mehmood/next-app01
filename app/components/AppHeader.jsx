import React from "react";
import Link from "next/link";
export default function AppHeader() {
  return (
    <div className="flex justify-between items-center px-8 py-6 text-slate-100 bg-slate-500">
      <h2 className="m-0">Logo</h2>
      <div className="flex gap-4">
        <Link href={"/users"}>Users</Link>
        <Link href={"/posts"}>Posts</Link>
      </div>
    </div>
  );
}

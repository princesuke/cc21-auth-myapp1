import React from "react";

export default function DashboardPage() {
  return (
    <div className="m-10 space-y-2">
      <h1 className="text-2xl font-bold">Welcome, </h1>
      <div>id: </div>
      <button className="border-2 p-1 rounded-md mt-6 cursor-pointer">
        Logout
      </button>
    </div>
  );
}

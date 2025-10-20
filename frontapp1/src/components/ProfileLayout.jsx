import { Outlet } from "react-router";

export default function ProfileLayout() {
  return (
    <div>
      <h2 className="text-2xl font-bold">ProfileLayout</h2>
      <br />
      children content: <br />
      <Outlet />
    </div>
  );
}

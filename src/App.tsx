import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="p-4">
      <nav className="mb-6 space-x-4 text-blue-600">
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Outlet />
    </div>
  );
}
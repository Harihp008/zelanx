import Users, { loader as usersLoader } from "./Users";

export const userRoutes = [
  {
    path: "users",
    element: <Users />,
    loader: usersLoader,
  },
];
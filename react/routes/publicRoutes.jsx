import { lazy } from "react";
const Landing = lazy(() => import("../pages/landing/Landing"));
const BlogsPage = lazy(() => import("../components/blogs/BlogsPage"));
const routes = [
  {
    path: "/",
    name: "Landing",
    exact: true,
    element: Landing,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/blogs",
    name: "Fairly Blogs",
    exact: true,
    element: BlogsPage,
    roles: [],
    isAnonymous: true,
  },
];

export default routes;

import { createElement } from "react";
import { createBrowserRouter, Outlet } from "react-router";
import Dashboard from "@/app/pages/Dashboard";
import AgentDetail from "@/app/pages/AgentDetail";
import Organizations from "@/app/pages/Organizations";
import TeamMembers from "@/app/pages/TeamMembers";
import KnowledgeBase from "@/app/pages/KnowledgeBase";
import ErrorPage from "@/app/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    element: createElement(Outlet),
    errorElement: createElement(ErrorPage),
    children: [
      {
        path: "/",
        Component: Dashboard,
      },
      {
        path: "/agent/:agentId",
        Component: AgentDetail,
      },
      {
        path: "/organizations",
        Component: Organizations,
      },
      {
        path: "/team",
        Component: TeamMembers,
      },
      {
        path: "/knowledge-base",
        Component: KnowledgeBase,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
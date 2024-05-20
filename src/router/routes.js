const routes = [
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/ToDo", component: () => import("src/pages/Todo.vue") },
      { path: "/AboutUs", component: () => import("src/pages/AboutUs.vue") },
      { path: "/Contacts", component: () => import("src/pages/Contacts.vue") },
      { path: "/Help", component: () => import("src/pages/Help.vue") },
    ],
  },
];

export default routes;

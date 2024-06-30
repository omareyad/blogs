import { createWebHistory, createRouter } from "vue-router";
import Home from "~@/pages/home.vue";
import newBlog from "~@/pages/newBlog.vue";
import editBlog from "~@/pages/editBlog.vue";
import allBlog from "~@/pages/allBlog.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blogs/new",
    name: "newBlog",
    component: newBlog,
    meta: {
      title: "New Blog",
    },
  },
  {
    path: "/blogs/edit/:id",
    name: "editBlog",
    component: editBlog,
    meta: {
      title: "Edit Blog",
    },
  },
  {
    path: "/blogs/all",
    name: "allBlog",
    component: allBlog,
    meta: {
      title: "All Blog",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes,
});
export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Authors from "../components/author/Authors.vue";
import AuthorCreate from "../components/author/Create.vue";

import Home from "../components/Home.vue";
import Books from "../components/Books.vue";
import Genres from "../components/Genres.vue";

import Dashboard from "../views/Dashboard.vue";
import CreateBook from "../components/Create_book.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "Login"
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home
      },
      {
        path: "/create",
        name: "Create",
        component: CreateBook
      },
      {
        path: "/books",
        name: "Books",
        component: Books
      },
      {
        path: "/authors",
        name: "Authors",
        component: Authors,
        children: [
          {
            path: "/create",
            name: "Author-Create",
            component: AuthorCreate
          }
        ]
      },
      {
        path: "/genres",
        name: "Genres",
        component: Genres
      }
    ]
  },

  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;

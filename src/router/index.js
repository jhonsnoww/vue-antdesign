import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/Login.vue";
import Authors from "../views/author/Authors.vue";
import Home from "../views/home/Home.vue";
import Books from "../views/book/Books.vue";
import Genres from "../views/genre/Genres.vue";

import Dashboard from "../views/Dashboard.vue";
import CreateBook from "../views/book/Create_book.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "Home"
    }
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      console.log("beforeEnter", store.getters.authenticated);

      if (store.getters.authenticated) {
        next();
      } else {
        next({ path: "/login" });
      }
    },
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
        component: Authors
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

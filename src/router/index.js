import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import HomeTodos from "../views/HomeTodos.vue";
import WorkTodos from "../views/WorkTodos.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "首頁",
    },
  },
  {
    path: "/hometodos",
    name: "HomeTodos",
    component: HomeTodos,
    meta: {
      title: "家庭相關待辦事項",
    },
  },
  {
    path: "/worktodos",
    name: "WorkTodos",
    component: WorkTodos,
    meta: {
      title: "工作相關待辦事項",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
})

export default router;

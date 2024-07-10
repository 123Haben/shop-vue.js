import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import store from "@/store";
import CreateProductPage from "@/pages/CreateProductPage.vue";
import ReadProductPage from "@/pages/ReadProductPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";


const routes = [
    {
        path: "/",
        component: HomePage,
        beforeEnter: (to, from, next) => {
            if (store.getters.isAuthenticated) {
                next("/shop");
            } else {
                next();
            }
        },
    },
    {
        path: "/shop",
        component: ShopPage,
        beforeEnter: (to, from, next) => {
            if (!store.getters.isAuthenticated) {
                next("/");
            } else {
                next();
            }
        },
    },
    {
        path: "/shop/create/product",
        component: CreateProductPage,
    },

    {
        path: "/shop/read/product/:id",
        name: "ReadProduct",
        component: ReadProductPage,
        props: true,

    },

    {
        path: "/:pathMatch(.*)*",
        component: NotFoundPage,
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

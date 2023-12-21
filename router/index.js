import { createRouter, createWebHistory } from 'vue-router';
import CardList from '../src/components/CardList.vue';
import AppAuth from '../src/components/AppAuth.vue';
import AppCard from '../src/components/AppCard.vue';
import AppAdmin from '../src/components/AppAdmin.vue';
import admin from "./middleware/admin";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: CardList,
            meta: {
                title: 'Reservation',
            }
        },
        {
            path: '/auth',
            name: 'auth',
            component: AppAuth,
            meta: {
                title: 'Authorisation'
            }
        },
        {
            path: '/card/:id',
            name: 'card',
            component: AppCard,
            meta: {
                title: 'Card'
            }
        },
        {
            path: '/admin',
            name: 'admin',
            component: AppAdmin,
            beforeEnter: (to, from, next) => {
                admin(next)
            },
            meta: {
                title: 'Admin',
            },
        },
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;


import Vue from 'vue'
import Router from 'vue-router'
import Singup from "@/components/Singup";
import Login from "@/components/Login";
import Dashboard from "@/components/dashboard/Dashboard";

Vue.use(Router);
const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: { template: '<router-view />' },
            children: [
                {
                    path: '/signup',
                    name: 'signup',
                    component: Singup
                },
                {
                    path: '/login',
                    name: 'login',
                    component: Login
                },
                {
                    path: '',
                    name: 'dashboard',
                    component: Dashboard
                }
            ]
        }
    ]
});

export default router

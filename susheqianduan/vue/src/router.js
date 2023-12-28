import {createRouter, createWebHashHistory} from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    redirect:'/',
    routes: [
        {
            path: '/',
            component: ()=>import("./components/login/login.vue"),
        },
        {
            path: '/manager',
            component: ()=>import("./components/manager/manager.vue"),
        },
        {
            path: '/student',
            component: ()=>import("./components/student/student.vue"),
        },
    ]
})
export default router
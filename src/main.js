import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
const app = createApp({})
const routes =[{path:'',component:App }]
const router = VueRouter.createRouter({history: VueRouter.createWebHashHistory(),routes})
app.use(router)
app.mount('#app')

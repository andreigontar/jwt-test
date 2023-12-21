import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/index.js'
import pinia from '../store/index.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "qalendar/dist/style.css"
import './assets/main.scss'

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"
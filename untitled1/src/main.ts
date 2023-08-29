import { createApp } from 'vue'
// import './style.css'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from "./router.ts";
// @ts-ignore
import { createPinia } from 'pinia'
// @ts-ignore
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// @ts-ignore
import {swal} from "sweetalert";
// @ts-ignore
import imageZoom from 'vue-image-zoomer'
//@ts-ignore
const pinia = createPinia()


const app = createApp(App)
// @ts-ignore
app.use(router)
// @ts-ignore
app.use(bootstrap)
app.use(imageZoom)
app.use(pinia)
app.use(swal)
app.mount('#app')

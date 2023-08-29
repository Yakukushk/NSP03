// @ts-ignore
import {createWebHashHistory, createRouter} from "vue-router";
// @ts-ignore
import ContactPage from "./components/Pages/ContactPage.vue";
// @ts-ignore
import PhonePage from "./components/Pages/Phones/IPhones.vue";
// @ts-ignore
import MapPage from "./components/Pages/MapPage.vue";
// @ts-ignore
import HomePage from "./components/Pages/HomePage.vue";
// @ts-ignore
import Samsung from "./components/Pages/Phones/Samsung.vue";
// @ts-ignore
import Xiaomi from "./components/Pages/Phones/Xiaomi.vue";
// @ts-ignore
import PaymentPage from "./components/Pages/Cart/Payment.vue";
// @ts-ignore
import CartPage from "./components/Pages/Cart/CartPage.vue";
// @ts-ignore
import ReviewForm from "./components/Pages/Review/ReviewForm.vue";
// @ts-ignore
import ReceiptPage from "./components/Pages/Cart/ReceiptPage.vue";
import {defineComponent} from "vue";





export default defineComponent(createRouter({
history: createWebHashHistory(),
routes: [
    {path: '/home/iphone', component: PhonePage},
    {path: '/home/samsung', component: Samsung},
    {path: '/home/xiaomi', component: Xiaomi },
    {path: '/contact', component: ContactPage},
    {path: '/map', component: MapPage},
    {path: '/cart/payment', component: PaymentPage},
    {path: '/cart/payment/receipt', component: ReceiptPage},
    {path: '/cart', component: CartPage},
    { path: '/review/:phoneId', name: 'Review', component: ReviewForm},
    {path: '/home', component: HomePage, alias: '/'}
]
}))
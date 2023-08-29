// npm install pinia
// main.ts => import { createPinia } from 'pinia' then const pinia = createPinia()
//

import {defineStore} from 'pinia';
import {reactive} from "vue";



export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: reactive([]),
        totalVAT: 0,
        deliveryCost: 8.99,

    }),
    getters: {
        totalCost(state) {
            return state.cartItems.reduce((total, product) => total + product.price, 0);
        },
        count: (state) => state.cartItems.length,
        isEmpty: (state) => state.count === 0
    },
    actions: {
        addToCart(product) {
            this.cartItems.push(product);
            console.log(this.totalCost)

        },

        removeFromCart(product) {
            const index = this.cartItems.indexOf(product);
            this.cartItems.splice(index, 1);
            console.log(this.totalCost);


        },
        clearCart(items) {
            items.value.cartItems = []
            items.totalCost = 0;
        },
    },
});

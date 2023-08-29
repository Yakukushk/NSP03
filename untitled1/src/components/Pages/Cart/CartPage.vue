<template>
    <Header :icons="headerValues.img" :title-page="headerValues.title"/>
    <div class="col-lg-15 p-4" v-if="cartItems.length !== 0">
        <div class="position-relative m-4">
            <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px;">
                <div class="progress-bar" style="width: 0"></div>
            </div>
            <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
            <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">2</button>
            <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
        </div>


    </div>

    <div class="mt-4" v-if="cartItems.length === 0">
        <h3>Cart is empty</h3>
    </div>
    <div class="container-fluid mt-2" v-else>

        <div class="mt-2 px-2 mx-2 align-items-md-end">

            <a @click="clearCart">
                <img src="https://www.svgrepo.com/show/354869/clear-option.svg" alt="clean"
                     style="height: 30px; width: 30px">
            </a>

        </div>


        <ul class="list-group list-group-horizontal-sm mt-2" v-for="cart in cartItems">
            <li class="mt-2"></li>
            <li class="list-group-item d-flex align-items-center">
                <img :src="cart.img" :alt="cart.name" class="rounded detailed-phone-img"
                     style="object-fit: contain; width: 50px; height: 50px;">
            </li>
            <li class="list-group-item d-flex align-items-center">
                <h6>{{ cart.name }}</h6>
            </li>
            <li class="list-group-item d-flex align-items-center">
                <h6>{{ cart.color }}</h6>
            </li>
            <li class="list-group-item d-flex align-items-center">
                <h6>{{ cart.price }} zł</h6>
            </li>
            <li class="list-group-item d-flex align-items-center p-2">
                <a @click="removeFromCart(cart)"><img src="https://www.svgrepo.com/show/491728/trash.svg"
                                                      :alt="removeFromCart" class="rounded detailed-phone-img"
                                                      style="object-fit: contain; width: 30px; height: 30px;"></a>
            </li>
        </ul>


    </div>


    <hr/>
    <div v-if="cartItems.length != 0">
        <div class="rounded d-flex flex-column p-2" style="background-color: #f8f9fa;">
            <div class="p-2 me-3">
                <h4>Order Recap</h4>
            </div>
            <div class="p-2 d-flex">
                <div class="col-8">Count</div>
                <div class="ms-auto">{{ counter }}</div>
            </div>
            <div class="p-2 d-flex">
                <div class="col-8">Support</div>
                <div class="ms-auto">0.00 zł</div>
            </div>
            <div class="p-2 d-flex">
                <div class="col-8">Delivery</div>
                <div class="ms-auto">{{ deliveryAmount }} zł</div>
            </div>
            <div class="border-top px-2 mx-2"></div>


            <div class="p-2 d-flex">
                <div class="col-8">
                    VAT<span class="fa fa-question-circle text-dark"></span>
                </div>
                <div class="ms-auto">{{ (totalTaxAmount).toFixed(2) }}</div>
            </div>
            <div class="border-top px-2 mx-2"></div>
            <div class="p-2 d-flex pt-3">
                <div class="col-8"><b>Total</b></div>
                <div class="ms-auto"><b class="text-success">{{ totalCost }} zł</b></div>
            </div>

        </div>
        <div class="mt-2 px-2 mx-2 align-items-md-end">
            <button class="btn btn-primary" @click="goToPayment">Next</button>
        </div>
    </div>
    <div v-else>

    </div>

    <div>
    </div>


    <footer v-if="cartItems.length != 0">
        <Footer description="To wisely live your life, you don't need to know much
Just rememeber two main rules for the beginning:
You better starve, than eat whatever
And better be alone, than with whoever. ~ Omar Khayyam"/>
    </footer>

</template>

<script lang="ts">
import {computed, defineComponent, ref, onMounted, onUpdated} from "vue";
import {useRouter} from "vue-router";
import {useCartStore} from "../../../pinia/store.js";
import Header from "../../SiteComponent/Header.vue";
import Payment from "./Payment.vue";
import Footer from "../../SiteComponent/Footer.vue";


export default defineComponent({
    components: {Footer, Payment, Header},
    setup() {

        const cartStore = useCartStore();
        const router = useRouter();

        const cartItems = computed(() => cartStore.cartItems);
        const totalCost = computed(() => cartStore.totalCost);
        const deliveryAmount = 8.99;

        const headerValues = ref({
            img: 'https://www.svgrepo.com/show/533044/cart-shopping-fast.svg',
            title: 'Cart'
        })

        function clearCart() {
            if (cartItems.value.length !== 0) {
                if (window.confirm('Are you sure you want to clear the cart?')) {
                    cartStore.cartItems = []
                }
            } else {
                swal("There are no items in your cart")
            }
        }

        const mainPage = () => {
            if (cartItems.value.length === 0) {
                router.push('/home');
            }
        }
        // onMounted(mainPage);
        // onUpdated(mainPage);
        const removeFromCart = (product) => {

            console.log("Removing product:", product);
            cartStore.removeFromCart(product);


        };
        const counter = computed(() => {
            return cartItems.value.length
        });
        const totalTaxAmount = computed(() => {
            let sum = 0;
            sum += totalCost.value * 0.23;
            return sum;
        });

        const goToPayment = () => {
            if (cartStore.isEmpty) {
                swal("Your cart is empty")
            } else {
                if (window.confirm('Are you sure you want to pay?')) {
                    router.push('/cart/payment')
                }
            }


        }


        return {
            cartItems,
            totalCost,
            cartStore,
            clearCart,
            totalTaxAmount,
            deliveryAmount,
            goToPayment,
            headerValues,
            counter,
            removeFromCart,
            mainPage

        };
    },
});
</script>

<template>
    <div class="col-lg-15 p-4" v-if="store.cartItems.length !== 0">
        <div class="position-relative m-4">
            <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px;">
                <div class="progress-bar" style="width: 100%"></div>
            </div>
            <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
            <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
            <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">3</button>
        </div>


    </div>
    <div class="card">
        <div class="card-body mx-4">
            <div class="container">
                <p class="my-5 mx-5 text-center" style="font-size: 30px;">Thank for your purchase</p>
                <div class="row">
                    <ul class="list-unstyled">
                        <li class="text-black">User : {{ payment.userFirstName }}</li>
                        <li class="text-black mt-1">Date : {{dateData.date}} - {{dateData.time}}</li>
                    </ul>
                    <hr>
                    <div class="row">
                    <div class="col-xl-10">
                        <p>Support</p>
                    </div>
                    <div class="col-xl-2">
                        <p class="float-end">0.00zł
                        </p>
                    </div>
                    <hr>
                </div>

                    <div class="row">
                        <div class="col-xl-10">
                            <p>Delivery</p>
                        </div>
                        <div class="col-xl-2">
                            <p class="float-end">8.99zł
                            </p>
                        </div>
                        <hr>
                    </div>
                    <div class="row">
                        <div class="col-xl-10">
                            <p>Product</p>
                        </div>
                        <div class="col-xl-7">
                            <ul class="list-group list-group-horizontal-sm mt-2 mb-4" v-for="cart in store.cartItems">
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
                            </ul>

                        </div>
                        <hr>
                    </div>
                <div class="row text-black">

                    <div class="col-xl-12">
                        <p class="float-end fw-bold">Total: {{store.totalCost}}
                        </p>
                    </div>
                    <hr style="border: 2px solid black;">
                </div>
                <div class="text-center" style="margin-top: 90px;">
                    <a @click="refreshPage" ><u class="text-info">View in browser</u></a>

                </div>

            </div>
        </div>
    </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUpdated} from "vue";
import {useCartStore} from "../../../pinia/store.js";
import {usePayment} from "../../../pinia/payment.js";
import {useRouter} from "vue-router";

export default defineComponent({
    name: "ReceiptPage",
    setup() {
        const store = useCartStore();
        const payment = usePayment();
        const router = useRouter();
        const dateTime = new Date();

        const dateData = {
            date: dateTime.toLocaleDateString(),
            time: dateTime.toLocaleTimeString()
        }
        const refreshPage = () => {
            router.push('/home');
            window.location.reload();

        }
        const mainPage = () => {
            if(store.cartItems.length === 0){
                router.push('/home');
            }
        }
        onMounted(mainPage);
        return {
            store, payment, dateData, router, refreshPage
        }
    }
})
</script>

<style scoped>

</style>
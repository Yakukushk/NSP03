<template>
<header>
    <Header :icons="headerValues.img" :title-page="headerValues.title"/>
</header>
    <div class="col-lg-15 p-4"  v-if="cartStore.cartItems.length !== 0">
        <div class="position-relative m-4">
            <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px;">
                <div class="progress-bar" style="width: 50%"></div>
            </div>
            <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
            <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
            <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
        </div>
    </div>
    <main>
        <div class="container  p-lg-4">
            <div class="card px-4">
                <form @submit.prevent="check">
                <p class="h8 py-4">Payment Details</p>
                <div class="row gx-4">
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Person Name</p>
                            <input v-model="payment.userFirstName" class="form-control mb-3" type="text" placeholder="Name" required>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Card Number</p>
                            <input v-model="payment.userCard" class="form-control mb-3" type="text" placeholder="1234 5678 435678" required>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Expiry</p>
                            <input v-model="payment.userExpiry" maxlength="4" class="form-control mb-3" type="text" placeholder="YYYY" required>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">CVV/CVC</p>
                            <input v-model="payment.userCVV" maxlength="3" class="form-control mb-3 pt-2 " type="password" placeholder="***" required>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-success mt-2 m-sm-3" type="submit">{{total}} zł</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </main>
    <hr/>
<footer>
    <Footer description="
    Thank you for your purchase, if you have any questions, you can always write to us in the Contact"/>
</footer>
</template>

<script lang="ts">
import {computed, defineComponent, onUpdated, onMounted, ref} from "vue";
import Header from "../../SiteComponent/Header.vue";
import Footer from "../../SiteComponent/Footer.vue";
import {useCartStore} from "../../../pinia/store.js";
import {usePayment} from "../../../pinia/payment.js";
import {useRouter} from "vue-router";


export default defineComponent({
    components: {Footer, Header},
    setup(){
        const cartStore = useCartStore();
        const total = cartStore.totalCost;
        const payment = usePayment();
        const router = useRouter();


        const headerValues = {
            img: 'https://www.svgrepo.com/show/502788/payment-card.svg',
            title: 'Payment'
        }

        const valuesPayment = ref({
            userFirstName: '',
            userLastName: '',
            userCard: '',
            userExpiry: '',
            userCVV: ''
        });

        const check = () => {
            if (!payment.userFirstName) {
                alert("Error! Input your Name");
            }
            else if (!payment.userCard) {
                alert("Error! Input your Card");
            } else if (payment.userCard.length < 16) {
                alert("Error! Input your card correctly");
            } else if (!payment.userExpiry) {
                alert("Error! Input your Expiry");
            } else if (payment.userExpiry.length !== 4) {
                alert("Error! Input your Expiry correctly");
            }
            else if (!payment.userCVV) {
                alert("Error! Input your CVV");
            } else if (payment.userCVV.length !== 3) {
                alert("Error! Input your CVV correctly");
            } else {
                if (cartStore.totalCost.value !== 0) {
                    swal('Thanks for purchase!');
                    router.push('/cart/payment/receipt')
                    console.log(payment.userFirstName + " " + payment.userCard +
                        " Total " + cartStore.totalCost + " zł");
                } else {
                    alert('Error! Without products');
                }
            }
        };


        const mainPage = () => {
            if(cartStore.cartItems.length === 0){
                router.push('/home');
            }
        }
        onMounted(mainPage);
        onUpdated(mainPage);

        return{
            headerValues, valuesPayment, check, total, cartStore,  payment
        }
    }

});
</script>

<style scoped>

</style>

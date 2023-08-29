<template>
    <footer class="bg-dark text-white text-center text-xl-start">

        <div class="container p-xxl-5 mt-5">

            <div class="row ">

                <div class="col-lg-5 col-md-12 mb-4 mb-md-0 ">
                    <h5 class="text-uppercase">Description</h5>

                    <p>
                        {{description }}
                    </p>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Products</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                            <a @click="goToIphone(valuesRoute.iphones)" class="text-white">IPhones</a>
                        </li>
                        <li>
                            <a @click="goToIphone(valuesRoute.samsung)" class="text-white">Samsung</a>
                        </li>
                        <li>
                            <a @click="goToIphone(valuesRoute.xiaomi)" class="text-white">Xiaomi</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Other</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                            <a @click="goToIphone(valuesRoute.contact)" class="text-white">Contact</a>
                        </li>
                        <li>
                            <a @click="goToIphone(valuesRoute.map)" class="text-white">Map</a>
                        </li>
                        <li>
                            <a @click="goToIphone(valuesRoute.cart)" class="text-white">Cart</a>
                        </li>
                    </ul>
                </div>



            </div>

        </div>

    </footer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
    name: "Footer",
    props: {
        description: {
            type: String,
            required: true
        }
    },
    setup(){
        const router = useRouter();

        const valuesRoute = {
            iphones: "IPhones",
            samsung: "Samsung",
            xiaomi: "Xiaomi",
            contact: "Contact",
            map: "Map",
            cart: "Cart"
        }
        function goToIphone(phoneType) {

            switch (phoneType){
                case "IPhones":
                    router.push('/home/iphone');
                    break;
                case "Samsung":
                    router.push('/home/samsung');
                    break;
                case "Xiaomi":
                    router.push('/home/xiaomi');
                    break;
                case "Contact":
                    router.push('/contact');
                    break;
                case "Map":
                    router.push('/map');
                    break;
                case "Cart":
                    router.push('/cart');
                    break;
                default :
                    break;
            }



        }
        return {
            goToIphone, valuesRoute
        }
    }
})
</script>

<style scoped>

</style>
<template>
    <div class="container pt-5" id="app">
        <div class="row">

            <div class="col-md-4">
                <div class="form-group">
                    <h2 class="search">Find your phone</h2>
                    <input
                            type="search"
                            class="form-control"
                            id="search"
                            placeholder="Name"
                            v-model="search"
                    />
                </div>
                <hr/>
                <ul class="list-group">
                    <li
                            v-for="(phone, index) of filterPhone"
                            class="list-group-item list-group-item-action"
                            @click="selectPhone(phone.id)"
                            :class="{'active' : selectedIndex === index}"
                            :key="phone.id"
                    >
                        {{ phone.name }} - {{ phone.capacity }} GB - {{ phone.color }}
                    </li>
                </ul>
            </div>


            <div class="col-md-8 pt-2">
                <div class="row">
                    <div class="col-md-6">
                        <h2>{{ selectedPhone.name }}</h2>

                        <div class="img-magnifier-container shadow-inner">
                            <!--                            <img-->
                            <!--                                    id="myimage"-->
                            <!--                                    :src="selectedPhone.img"-->
                            <!--                                    :alt="selectedPhone.name"-->
                            <!--                                    class="shadow-inner hover-shadow rounded detailed-phone-img"-->
                            <!--                                    style="object-fit: contain; width: 100%; height: 100%;"-->
                            <!--                            />-->
                            <Carousel :images="[selectedPhone.img, selectedPhone.img1, selectedPhone.img2]"/>


                        </div>
                    </div>

                    <div class="col-md-6 pt-5">


                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Model - <strong>{{ selectedPhone.name }}</strong></li>
                            <li class="list-group-item">Color - <strong>{{ selectedPhone.color }}</strong></li>
                            <li class="list-group-item">Price - <strong>{{ selectedPhone.price }} zł</strong></li>
                            <li class="list-group-item">Capacity - <strong>{{ selectedPhone.capacity }} GB</strong></li>
                            <li class="list-group-item"><p @click="reviewLink(selectedPhone.id)" class="btn ">Review -
                                {{ review.count(selectedPhone.id) }}</p></li>

                        </ul>
                        <button @click="addToCart(selectedPhone)" class="btn btn-success btn-lg btn-rounded mt-2">Add
                        </button>


                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import CartPage from "../Pages/Cart/Payment.vue";
import {useRouter} from "vue-router";
import {useReviewStore} from "../../pinia/review.js";
import {useCartStore} from "../../pinia/store.js";
import Carousel from "../SiteComponent/Carousel/Carousel.vue";


let id = 0;
export default defineComponent({
    name: "PhoneData",
    props: {
        phoneData: {
            type: Array,
            required: true

        }
    },
    components: {
        Carousel,
        CartPage
    },
    setup(props) {
        const store = useCartStore();
        const review = useReviewStore();
        const router = useRouter();
        const visibleSlide = ref(0);
        const selectedIndex = ref(0);
        const search = ref('');
        let selectedPhone = null;
        const filterPhone = computed(() => {

            return props.phoneData.includes(search.value) || props.phoneData.filter(phone => phone.name.includes(search.value));

        });
        selectedPhone = ref(filterPhone.value[0]);

        function selectPhone(index) {
            selectedIndex.value = index;
            selectedPhone.value = filterPhone.value[index]
            review.selectPhone(selectedPhone.value.id);
        }

        const reviewLink = (phoneId) => {
            router.push(`/review/${phoneId}`);
        }


        const addToCart = (product) => {
            swal(`Added to cart ${selectedPhone.value.name} - ${selectedPhone.value.price} zł`)
            store.addToCart(product)


        };


        return {

            selectedIndex,
            search,
            filterPhone,
            selectPhone,
            selectedPhone,
            addToCart,
            reviewLink,
            review,
            visibleSlide

        }
    }
});
</script>

<style scoped>

</style>

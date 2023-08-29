<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img :src="icons" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                {{ titlePage }}
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#/home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/contact" @click="goToContact(valueHeader.contact)">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/map" @click="goToContact(valueHeader.map)">Map</a>
                    </li>
                </ul>
                <a class="nav-link position-relative position-absolute top-0 end-0 me-4 mt-2" href="#/cart"
                   @click="goToContact(valueHeader.cart)">
                 <span class="mt-2 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >{{ store.count }}</span>
                    <img src="https://www.svgrepo.com/show/533043/cart-shopping.svg" alt="cart"
                         class=" rounded detailed-phone-img"
                         style="object-fit: contain; width: 30px; height: 30px">
                </a>


            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRouter} from 'vue-router'
import {useCartStore} from "../../pinia/store.js";



export default defineComponent({
    name: "Header",
    props: {
        titlePage: {
            type: String,
            required: true
        },
        icons: {
            type: String,
            required: true
        }
    },
    setup() {
        const router = useRouter();
        const store = useCartStore()
        const valueHeader = {
            contact: "Contact",
            map: "Map",
            cart: "Cart",
            like: "Like"
        }

        function goToContact(type) {
            if (type === "Contact") {
                router.push('/contact')
            } else if (type === "Map") {
                router.push('/map')
            } else if (type === "Cart") {
                router.push('/cart')
            } else if(type === "Like"){
                router.push('/like')
            }

        }

        return {
            goToContact, valueHeader, store
        }
    }


})
</script>

<style scoped>
body {
    overflow: hidden;
}

.navbar {
    /*font-family: "Exo", sans-serif;*/
    color: #1a1a1a;
    background: linear-gradient(-45deg, #ffffff, #f9f9f9, #f2f2f2, #d9d9d9);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
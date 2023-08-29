<template>
    <header>
    <Header :icons="headersValue.img" :title-page="headersValue.title"/>
    </header>

    <main class="mt-lg-5">
        <LMap class="map" ref="map" :zoom="valuesMap.zoom" :center="valuesMap.center" :useGlobalLeaflet="false">
            <LTileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                layer-type="base"

            ></LTileLayer>
            <LMarker v-for="shop in valuesMap.shops" :key="shop.id" :lat-lng="shop.shop"></LMarker>
        </LMap>
    </main>

    <footer class="mt-2">
        <Footer description="here you can find the nearest stores for purchasing the device "/>
    </footer>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {LMap, LMarker, LTileLayer} from "@vue-leaflet/vue-leaflet"
import "leaflet/dist/leaflet.css"
import Header from "../SiteComponent/Header.vue";
import Footer from "../SiteComponent/Footer.vue";

let id = 0;
export default defineComponent({
    name: "LaptopPage.vue",
    components: {LMarker, Footer, Header, LTileLayer, LMap},
    setup() {

        const valuesMap = ref({
            map: ref(null),
            zoom: ref(10),
            center: ref([54.4606017, 17.0281356]),
            shops : [{
                id: id++,
                shop: [54.20747359905213, 16.16433552769357]
            },
                {
                    id: id++,
                    shop: [54.404910967692516, 16.66860150337539    ]
                },
                {
                    id: id++,
                    shop: [54.25784955468182, 16.148422313523046]
                },
            ]

        })


        const headersValue = ref({
            img: 'https://www.svgrepo.com/show/532550/map-location-pin.svg',
            title: "Map"
        })
        return {
            valuesMap, headersValue
        }
    }
})
</script>

<style scoped>
html, body {
    margin: 0;
    padding: 0;

}

main {
    height: 80vh;
    width: 98.8vw;

}
.map{

}
</style>
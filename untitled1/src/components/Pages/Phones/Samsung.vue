<template>
    <header>
        <Header :icons="headersValue.img" :title-page="headersValue.title"/>
    </header>
    <main>
        <PhoneData :phone-data="phonesDataBase.phoneData"/>
    </main>

    <footer>
    <Footer description="Samsung, South Korean company that is one of the world\'s largest producers of electronic devices.
                         Samsung specializes in the production of a wide variety of consumer and industry electronics"/>
    </footer>
</template>

<script lang="ts">
import PhoneData from "../../Data/PhoneData.vue";
import {defineComponent, ref, ToRef} from "vue";
import Header from "../../SiteComponent/Header.vue";
import Footer from "../../SiteComponent/Footer.vue";
let id = 0;
export default defineComponent({
    name: "Samsung",
    components: {Footer, Header, PhoneData},
    setup(){
        const headersValue = ref({
            img: 'https://www.svgrepo.com/show/104348/samsung-galaxy.svg',
            title: "Samsung"
        })
        const phonesDataBase = ref({
            phoneData: [
                {
                    id: 4,
                    name: "SAMSUNG Galaxy Z Fold 5",
                    img: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/56/5605852/Smartfon-SAMSUNG-Galaxy-Z-Fold-5-Czarny-tyl-front-3.jpg",
                    img1: "https://o.remove.bg/downloads/c2f7855b-f45e-45ca-b56d-05300655bf7f/galaxy-z-fold5-highlights-kv-a-removebg-preview.png",
                    img2: "https://o.remove.bg/downloads/5f616a62-5b47-4487-a9f1-6602f561988f/Fold-5-Flip-5-removebg-preview.png",
                    description: "Some Text",
                    color: "black",
                    capacity: 64,
                    price: 2000
                },
                {
                    id: 5,
                    name: "SAMSUNG Galaxy S23 Ultra 12",
                    img: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/50/5073816/Smartfon-SAMSUNG-Galaxy-S23-Ultra-Jasnorozowy-front-tyl-1.jpg",
                    img1: "https://o.remove.bg/downloads/155803d8-d6fe-42fc-a410-fdaefa4c9941/samsung-galaxy-s23-ultra-colors1-removebg-preview.png",
                    img2: "https://o.remove.bg/downloads/25dd1d89-4ffc-48be-a037-44acffcd15a2/20230122_074759-removebg-preview.png",
                    description: "Some Text",
                    color: "white",
                    capacity: 64,
                    price: 2000
                }
            ]
        });
        return {
        phonesDataBase, headersValue

        }
    }
})
</script>

<style scoped>

</style>
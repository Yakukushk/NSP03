<template>
    <header>
        <Header :icons="headerValue.img" :title-page="headerValue.title"/>
    </header>
    <div class="container mt-4">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="catalog in catalogValue.phoneValue" :key="catalog.id">
                <div class="show">
                    <div class="card" style="width: 18rem;">
                        <img :src="catalog.imgPhone" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{ catalog.namePhone }}</h5>
                            <p class="card-text">
                                <b>Description : </b> {{ catalog.descriptionPhone }}
                                <br/>
                            </p>
                            <a @click="goToPage(catalog.namePhone)" class="btn btn-primary">Check out</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
<div class="footer">
    <Footer description="Mobile phones are used for a variety of purposes,
     such as keeping in touch with family members, for conducting business,
     and in order to have access to a telephone in the event of an emergency." />
</div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import {useRoute, useRouter} from 'vue-router'
import Header from "../SiteComponent/Header.vue";
import Footer from "../SiteComponent/Footer.vue";

let id = 0;

export default defineComponent({
    name: "HomePage",
    components: {Footer, Header},
    setup() {
        const router = useRouter();
        const headerValue = ref({
            img: 'https://www.svgrepo.com/show/533534/shop.svg',
            title: 'Home'
        })

        const catalogValue = ref({
            phoneValue: [
                {
                    id: id++,
                    imgPhone: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/41/4118010/Smartfon-APPLE-14-Pro-Gwiezdna-czern-1.jpg",
                    namePhone: 'IPhones',
                    descriptionPhone: 'The iPhone is a smartphone made by Apple that combines a computer, ' +
                        'iPod, digital camera and cellular phone into one device with a touchscreen interface.'
                },
                {
                    id: id++,
                    imgPhone: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/50/5073816/Smartfon-SAMSUNG-Galaxy-S23-Ultra-Jasnorozowy-front-tyl-1.jpg",
                    namePhone: 'Samsung',
                    descriptionPhone: 'Samsung, South Korean company that is one of the world\'s largest producers of electronic devices.' +
                        ' Samsung specializes in the production of a wide variety of consumer and industry electronics'
                },
                {
                    id: id++,
                    imgPhone: "https://www.mediaexpert.pl/media/cache/resolve/gallery/images/36/3627089/Smartfon-XIAOMI-Redmi-Note-11s-6-128GB-Grafitowy-front-tyl.jpg",
                    namePhone: 'Xiaomi',
                    descriptionPhone: 'Xiaomi is a consumer electronics and smart manufacturing company with smartphones and smart hardware connected by an IoT platform at its core.'
                }

            ]
        });

        function goToIphone(phoneType) {

            switch (phoneType){
                case "IPhones":
                    router.push("/home/iphone")
                    break;
                case "Samsung":
                    router.push("/home/samsung")
                    break;
                case "Xiaomi":
                    router.push('/home/xiaomi')
                    break;


            }



        }


        return {
            router, goToPage: goToIphone, headerValue, catalogValue
        }
    }
})
</script>

<style scoped>

</style>
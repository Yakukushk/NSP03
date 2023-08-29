
    <template>
        <header>
            <Header :icons="headersValue.img" :title-page="headersValue.title"/>
        </header>
        <main>
            <PhoneData :phone-data="phonesDataBase.phoneData"/>
        </main>

        <footer>
            <Footer description="Xiaomi is a consumer electronics and smart manufacturing company with smartphones
             and smart hardware connected by an IoT platform at its core."/>
        </footer>

    </template>


<script lang="ts">
import PhoneData from "../../Data/PhoneData.vue";
import Header from "../../SiteComponent/Header.vue";
import {defineComponent, ref} from "vue";
import Footer from "../../SiteComponent/Footer.vue";
let id = 0;
export default defineComponent({
    name: "Xiaomi",
    components: {Footer, Header, PhoneData},
    setup(){
        const headersValue = ref({
            img: 'https://www.svgrepo.com/show/307002/xiaomi.svg',
            title: "Xiaomi"
        })
        const phonesDataBase = ref({
            phoneData: [
                {
                    id: 6,
                    name: "XIAOMI 13 8",
                    img: "https://m.media-amazon.com/images/I/51N82jk-ERL._AC_UF1000,1000_QL80_.jpg",
                    img1: "https://o.remove.bg/downloads/83bddd5d-bbab-4b96-b770-f02a89e67188/TELKOMXIA1345181-1-removebg-preview.png",
                    img2: "https://o.remove.bg/downloads/8723fe7f-967b-4934-a0eb-ae212a9e1422/xiaomi-13-pro-ssa-medium-removebg-preview.png",
                    description: "Some Text",
                    color: "black",
                    capacity: 256,
                    price: 2000
                },
                {
                    id: 7,
                    name: "XIAOMI Redmi Note 12 ",
                    img: "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/52/5256462/Smartfon-XIAOMI-Redmi-Note-12-4-128GB-6.67-120Hz-Niebieski-tyl-front.jpg",
                    img1: "https://o.remove.bg/downloads/ed259935-924d-4a17-bb8b-4197f5c69177/images-removebg-preview.png",
                    img2: "https://parktelshop.pl/userdata/public/assets/Xiaomi/Redmi%20Note%2012%20Pro%205G/xiaomi-redmi-note-12-pro-5g.jpg",
                    description: "Some Text",
                    color: "blue",
                    capacity: 256,
                    price: 2000
                }
            ]
        })
        return{
            headersValue, phonesDataBase
        }
    }
})
</script>

<style scoped>

</style>
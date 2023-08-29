<template>
    <header>
        <Header :icons="headerValues.img" :title-page="headerValues.title" />
    </header>
<main >
  <PhoneData :phone-data="phonesDataBase.phoneData" />
</main>

    <div class="footer">
      <Footer description="The iPhone is a smartphone made by Apple that combines a computer,
       iPod, digital camera and cellular phone into one device with a touchscreen interface."/>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import PhoneData from "../../Data/PhoneData.vue";
import Header from "../../SiteComponent/Header.vue";
import Footer from "../../SiteComponent/Footer.vue";

let id = 0;
export default defineComponent({
    components: {PhoneData, Header, Footer},

    setup() {
    const headerValues = {
        img: 'https://www.svgrepo.com/show/474389/iphone.svg',
        title: 'IPhone'
    }
        const phonesDataBase = ref({
            phoneData: [
                {
                    id: 0,
                    name: "Iphone 14",
                    img: "./src/assets/images/Iphones/Iphone14.png",
                    img1: "./src/assets/images/Iphones/Iphone14_1.png",
                    img2: "./src/assets/images/Iphones/Iphone14_2.png",
                    description: "Some Text",
                    color: "silver",
                    capacity: 64,
                    price: 2000
                },

                {
                    id: 1,
                    name: "Iphone 13",
                    img: "./src/assets/images/Iphones/Iphone13.png",
                    img1: "./src/assets/images/Iphones/Iphone13_1.png",
                    img2: "./src/assets/images/Iphones/Iphone13_2.png",
                    description: "Some Text",
                    color: "white",
                    capacity: 64,
                    price: 2000
                },
                {
                    id: 2,
                    name: "Iphone 12",
                    img: "./src/assets/images/Iphones/Iphone12_1.png",
                    img1: "./src/assets/images/Iphones/Iphone12.png",
                    img2: "./src/assets/images/Iphones/Iphone12_2.png",
                    description: "Some Text",
                    color: "black",
                    capacity: 64,
                    price: 2000
                },
                {
                    id: 3,
                    name: "Iphone 11",
                    img: "./src/assets/images/Iphones/Iphone11.png",
                    img1: "./src/assets/images/Iphones/iphone11_1.png",
                    img2: "./src/assets/images/Iphones/Iphone11_2.png",
                    description: "Some Text",
                    color: "black",
                    capacity: 64,
                    price: 1500
                },
            ]
        });

        return {
            headerValues, phonesDataBase
        }
    }

})
</script>

<style scoped>

</style>
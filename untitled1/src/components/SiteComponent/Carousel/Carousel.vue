<template>
    <div>
        <div class="carousel slide carousel-fade carousel-dark">
            <div class="carousel-inner">
                <div v-for="(image, index) in images" :key="index"
                     :class="{ 'carousel-item': true, active: index === activeIndex }">
                    <img :src="image" class="d-block w-100" alt="Slide">
                </div>
            </div>
            <button class="carousel-control-prev border-2" type="button" @click="prevSlide">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next border-2" type="button" @click="nextSlide">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
    name: "Carousel",
    props: ["images"],
    setup(props) {
        const activeIndex = ref(0);
        const prevSlide = () => {
            activeIndex.value--;
            if (activeIndex.value < 0) {
                activeIndex.value = props.images.length - 1;
                console.log("previous")
            }
        }
        const nextSlide = () => {
            activeIndex.value++;
            if (activeIndex.value >= props.images.length) {
                activeIndex.value = 0;
                console.log("next")
            }


        }
        return {
            prevSlide, nextSlide, activeIndex
        }
    }
})
</script>

<style scoped>

</style>
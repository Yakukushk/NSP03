<template>
    <header>
        <Header :icons="headerValues.img" :title-page="headerValues.title"/>
    </header>
    <div class="container-fluid mt-4">

        <form @submit.prevent="submitReview">
            <div class="form-group">
                <h5 for="exampleFormControlInput1">Email address</h5>
                <input required type="email" class="form-control" id="exampleFormControlInput1"
                       v-model="reviewValues.email"
                       placeholder="name@example.com">
            </div>
            <div class="form-group mt-2">
                <h5 for="exampleFormControlSelect1">Rating</h5>
                <select required class="form-control" v-model="reviewValues.rating" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group mt-2">
                <h5 for="exampleFormControlTextarea1">Message</h5>
                <textarea required v-model="reviewValues.comment" class="form-control" id="exampleFormControlTextarea1"
                          rows="4"></textarea>
            </div>
            <button class="btn btn-success mt-2">Submit</button>
        </form>

    </div>
    <hr/>
    <div class="container-fluid mt-2">
        <h4>Comments</h4>
        <div>
            <ul class="list-group" v-for="comments in newCommentItems" :key="comments.id">
                <li class="mt-4"></li>
                <li class="list-group-item">Message was posted : {{ comments.date }} - {{ comments.time }}</li>
                <li class="list-group-item mb-2"><strong>User -</strong> {{ comments.email }}</li>
                <li class="list-group-item mb-2"><strong>Rate - </strong>{{ comments.rating }}</li>
                <li class="list-group-item nb-2"><strong>Comment -</strong> {{ comments.comment }}</li>

            </ul>
        </div>


    </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive} from "vue";
import {useReviewStore} from '../../../pinia/review.js';
import Header from "../../SiteComponent/Header.vue";
import {useRoute} from "vue-router";

export default defineComponent({
    name: "ReviewForm",
    components: {Header},

    setup() {
        const reviewStore = useReviewStore();
        const route = useRoute();
        const phoneId = Number(route.params.phoneId);
        const dateTime = new Date();

        const newCommentItems = computed(() => reviewStore.commentsStorage.filter(comment => comment.phoneId === phoneId));

        // const commentItems = computed(() => reviewStore.commentsStorage);
        const headerValues = {
            img: 'https://www.svgrepo.com/show/532370/user-heart.svg',
            title: 'Review'
        }

        const reviewValues = reactive({
            email: reviewStore.formData.name,
            rating: reviewStore.formData.rating,
            comment: reviewStore.formData.comment,
            phoneId: phoneId,
            date: dateTime.toLocaleDateString(),
            time: dateTime.toLocaleTimeString()
        })


        const submitReview = async () => {  // Zwróć tę funkcję
            await reviewStore.submitReview(); // Czekamy, aż będzie działać

            const newReview = {
                email: reviewValues.email,
                rating: reviewValues.rating,
                comment: reviewValues.comment,
                phoneId: phoneId,
                date: reviewValues.date,
                time: reviewValues.time
            }
            reviewStore.selectPhone(phoneId);
            reviewStore.addComment(newReview);

            if (reviewStore.feedbackMessage) {
                console.log("Time" + newReview.time);
                console.log("Message " + reviewStore.feedbackMessage);
                console.log("User " + newReview.email);
                console.log("Rate " + newReview.rating);
                console.log("Comment " + newReview.comment);
                console.log("Current ID" + newReview.phoneId)
            }
        };

        const feedBacks = {
            'feedback-message': true,
            'success': reviewStore.submitStatus === 'success',
            'error': reviewStore.submitStatus === 'error',
        }

        return {
            headerValues,
            reviewStore,
            reviewValues,
            feedBacks,
            submitReview,
            newCommentItems
        }
    }
})
</script>

<style scoped>

</style>
import {defineStore} from "pinia";
import {reactive} from "vue";

export const useReviewStore = defineStore('reviewStore', {
    state: () => ({

        formData: {
            id: 0,
            name: '',
            rating: '5',
            comment: '',
            phoneId: 0,
            date: 0,
            time: 0
        },
        submitStatus: 'idle',
        feedbackMessage: '',
        commentsStorage: reactive([]),
        selectedPhone: null,
    }),
    getters: {
        count: (state) => (phoneId) => {
        const filterRate = state.commentsStorage.filter(comment => comment.phoneId === phoneId)
            return filterRate.length
        },
        isEmpty: (state) => state.count === 0,

    },

    actions: {

        async submitReview() {
            this.submitStatus = 'submitting';
            try {
                swal("Your message was sent");
                this.submitStatus = 'success';
                this.feedbackMessage = 'Success!'

                this.formData = {
                    id: 0,
                    name: '',
                    rating: '5',
                    comment: '',
                    date: 0,
                    time: 0
                }


            } catch (error) {
                this.submitStatus = 'error';
                this.feedbackMessage = "Error! can't submitting form"
                console.log(error);
            }
        },
        selectPhone(phoneID) {
            this.selectedPhone = phoneID;
        },

        addComment(values) {
            try {
                // values.phoneId = this.selectedPhone;
                this.commentsStorage.push(values);
            } catch (error) {
                console.log("Error! with pushing", error);
            }
        }
    }
})
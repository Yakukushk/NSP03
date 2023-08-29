import {defineStore} from 'pinia';
import {reactive} from "vue";


export const usePayment = defineStore('payment', {
    state: () => ({
        userFirstName: '',
        userLastName: '',
        userCard: '',
        userExpiry: '',
        userCVV: ''
    }),
    actions: {

    }
})
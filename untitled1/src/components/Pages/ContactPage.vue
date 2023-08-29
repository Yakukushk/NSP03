<template>
    <header>
    <Header :icons="headerValue.img" :title-page="headerValue.title"/>
    </header>
    <main class="mt-5">
    <div class="container-sm col-4">

    <form class="form-control" @submit.prevent="sendMessage">
        <div class="title text-center">
            <h1>Contact Form</h1>
        </div>
        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example1">Name</label>
            <input type="text" v-model="valuesEmail.fName" id="form4Example1" class="form-control"/>
        </div>
        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example1">Surname</label>
            <input type="text" v-model="valuesEmail.fSurname" id="form4Example1" class="form-control"/>
        </div>

        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example2">Email address</label>
            <input type="email" v-model="valuesEmail.fEmail" id="form4Example2" class="form-control"/>
        </div>
        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example2">Subject</label>
            <input type="text" v-model="valuesEmail.fSubject" id="form4Example2" class="form-control"/>
        </div>

        <div class="form-outline mb-4">
            <label class="form-label" for="form4Example3">Message</label>
            <textarea v-model="valuesEmail.fMessage" class="form-control" id="form4Example3" rows="4"></textarea>
        </div>


        <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
    </form>
    </div>
    </main>
    <footer>
        <Footer description="A Contact Us page provides guidance for existing customers and offers an overview of your brand for new visitors."/>
    </footer>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {Email} from '../smtp.js'
import Header from "../SiteComponent/Header.vue";
import Footer from "../SiteComponent/Footer.vue";

export default defineComponent({
    name: "ContactPage",
    components: {Footer, Header},
    setup() {
        const headerValue = ref({
            img: 'https://www.svgrepo.com/show/487232/contact-book.svg',
            title: 'Contact'
        });
        const valuesEmail = ref({
            fName: '',
            fSurname: '',
            fEmail: '',
            fSubject: '',
            fMessage: '',
            fNumber: '',
            InvalidPhoneNumber: false
        })
        const validatePhoneNumber = () => {
            const dig = valuesEmail.value.fNumber.replace(/\D/g, '');
            valuesEmail.value.InvalidPhoneNumber = dig.length !== 10;
        }

        const sendMessage = () => {
            try {
                const message = Email.send({
                    Host: "smtp.elasticemail.com",
                    Port: 2525,
                    Username: "example.23A@outlook.com",
                    Password: "867163176BBBD20573C08067EBA9EE61CDC7",
                    To: "example.23A@outlook.com",
                    From: 'example.23A@outlook.com',
                    Name: valuesEmail.value.fName,
                    Subject: valuesEmail.value.fSubject,
                    Surname: valuesEmail.value.fSurname,
                    Body: "<strong>Name : </strong>" + valuesEmail.value.fName + '<br/> ' +
                         "<strong>Email : </strong>" + valuesEmail.value.fEmail + '<br/> ' +
                        "<strong>Surname : </strong>" + valuesEmail.value.fSurname + '<br/> ' +
                        "<strong>Message : </strong>" + valuesEmail.value.fMessage + '<br/> ',
                });

                alert("OK");
            } catch (error) {
                console.error("Error sending message:", error.value);
                alert("An error occurred while sending the message.");
            }
        };

        return {
            sendMessage, valuesEmail, headerValue
        }
    }

})
</script>

<style scoped>

</style>
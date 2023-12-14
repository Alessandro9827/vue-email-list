//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const { createApp } = Vue;

createApp({
    data() {
        return {
            emails:[]
        }
    },

    methods: {
        getEmail(){
            for(let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                (response) =>{
                console.log(this.emails);
                this.emails.push(response.data.response)
            });
        }
        }
    },


    created() {
        this.getEmail();
    },

}).mount('#app');
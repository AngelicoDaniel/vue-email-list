var app = new Vue({
    el: '#app',
    data: {
        newArr: []
    },
    mounted() {
  
    },
    created() {
  
    },
    beforeUpdate() {
  
    },
    methods: {
        randomMail (){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response)
                this.newArr.push(response.data.response)
                console.log(this.newArr)
            })
        },
        mailGenerator (){
            for (let index = 0; index < 10; index++) {
                this.randomMail();
                this.newArr = [] 

            }
        }

    }
  })
  
let eventBus = new Vue()
Vue.component('product', {
    props: {
    },
    template: `
   <div class="product">
    <div>
    <columns></columns>
</div>
       </div>
   </div>
 `,
    data() {
        return {
            cards: [],
        }
    },
    mounted() {
        eventBus.$on('card-submitted', cardAdd => {
            this.cards.push(cardAdd)
        })
    }
})
Vue.component('columns', {
    props: {
    },
    template: `
   <div class="columns">
    <div class="column1">
    <div class="headercard">Задачи</div>
    <cards></cards>
</div>
    <div class="column2">
    <div class="headercard">Выполнено 50%</div>
</div>
    <div class="column2">
    <div class="headercard">Выполнено 100%</div>
</div>
       </div>
   </div>
 `,
    data() {
        return {

        }
    },
})

Vue.component('cards', {
    props: {
    },
    template: `
    <form class="card" >
        <label for="name">Наименовани заметки</label>
        <input type="text">
        <label for="name">Задача</label>
        <input type="text">
        <p>
            <input @click="updateErrors" type="submit" value="Submit"> 
        </p>
</form>

 `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            answer: null,
            errors: []
        }
    },
    methods:{
        onSubmit() {
            if(this.name && this.review && this.rating && this.answer) {
                let cardAdd = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    answer: this.answer,
                }
                eventBus.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.rating = null
                this.answer = null
            } else {
                if(!this.name) this.errors.push("Name required.")
                if(!this.review) this.errors.push("Review required.")
                if(!this.rating) this.errors.push("Rating required.")
                if(!this.answer) this.errors.push("Answer required.")
            }
        },
        updateErrors() {
            this.errors = []
        }

    },
})



let app = new Vue({
    el: '#app',
    data: {
    },

})

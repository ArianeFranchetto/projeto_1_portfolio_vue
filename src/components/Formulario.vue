<template>
    <div>


        <form
        @submit.stop.prevent="addTodo"
        class="form">
            <div>
                <img class="style-img" src="../assets/image/logo.png">
            </div>
            <input 
            v-model="title"
            class="style-input" placeholder="Adicione um novo item ..." type="text">

            <button 
            class="style-btn" 
            type="submit">
                ADICIONAR
            </button>
        </form>
    </div>

</template>

<script>
export default {
    name: "Formulario",

    data () {
    return {
        title: '',
    }
},
methods: {
    addTodo() {
        if (!this.title) {
            return false;
        }
        this.$store.dispatch('addTodo', {
            title: this.title,
            completed: false
        })
        

    }
}
}


</script>
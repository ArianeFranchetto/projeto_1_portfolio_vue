<template>
    <div class="main">
        <div>

           
            <Formulario />
            <ItemsTodo/>
            <Empty />
            

        </div>
    </div>

</template>

<script>
import Empty from './Empty.vue';
import Formulario from './Formulario.vue';
import ItemsTodo from './ItemsTodo.vue';
import axios from 'axios';





export default {
    name: "Todo",
    components: {
        Formulario,
        ItemsTodo,
        Empty
    },

    data() {
    return {
       loading: false
    }
},

created() {
this.loading = true
       axios.get('http://localhost:3000/todos')
    .then((response) => 
    {
        this.$store.commit('storeTodos', response.data)
    }
    
    )
    .finally( () =>
    this.loading = false
    
    )
   

},



}
</script>


<template>
    <div class="main">
        <div>

            <Formulario />
            <ItemsTodo />
            <ItemsTodo/>
            <Empty />

        </div>
    </div>

</template>

<script>
import Empty from './Empty.vue';
import Formulario from './Formulario.vue';
import ItemsTodo from './ItemsTodo.vue';


export default {
    name: "Todo",
    components: {
        Formulario,
        ItemsTodo,
        Empty
    }

}
</script>


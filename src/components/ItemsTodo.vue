<template>

<Item
    v-for="todo in $store.state.todos"
    :key="todo.id"
    :todo="todo"
    />
    


</template>
<script>
import Item from './Item.vue';

export default {
    name: "ItemsTodo",

    components: {
        Item
    }
}

</script>
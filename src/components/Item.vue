<template>
    <div class="itens-align">
        <div>
            <div>


                <div>
                  
                    <input 
                    class="style-input" 
                    type="text"
                    placeholder="Digite a sua tarefa"
                    :value="todo.title"
                    @keyup.enter="updateTodo"

                    />
                </div>
                <div class="btn-position">
                    <div>
                        <button class="icon">
                            <svg class="ml-3 h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 7L18.1327 19.1425C18.0579 
20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 
19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 
3 9 3.44772 9 4V7M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button 
                        :class ="{
                            'icon': isCompleted,
                            'icon-is-complete': !isCompleted
                        }"
                        @click="onCheckClick"
                        >
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Item",

    props: {
        todo: {
            type: Object,
            default: () => ({}),
        }
    },
    data() {
        return {
            isCompleted: this.todo.completed,
        }
    },

    methods: {
       

        onCheckClick() {
            this.isCompleted = !this.isCompleted
        }

        
    }
}

</script>
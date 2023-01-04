<template>
   
    <Todo/>



</template>

<script>
import Todo from './components/Todo.vue';

export default {
  components: {
    Todo,

  },

}

</script>

<style>
.main {
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    ;
}

.style-img {
    width: 200px;
    margin-top: 5px;
    margin-bottom: 5px;

}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.style-input {
    background-color: #FFDEE9;
    background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
    border-radius: 35px;
    box-shadow: black;
    width: 250px;
    height: 25px;
    text-align: center;
    border: none;
    margin-top: 10px;


}

.style-btn {
    margin-top: 8px;
    width: 100px;
    border-radius: 35px;
    border: none;
}

.btn-position {
    display: flex;
    justify-content: center;
    
}

.icon {
    width: 50px;
    border-radius: 50px;
    margin-bottom: 5px;
    margin-top: 5px;
    margin-right: 5px;
    border: none;
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
    

}

.check-tarefa {
    text-align: center;
    background-color: #FFDEE9;
    background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
    margin-top: 5px;
    margin-bottom: 5px;
    border: none;
}

.itens-align {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
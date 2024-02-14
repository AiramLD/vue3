<script setup>
import { ref } from 'vue';
import MyHeader from "./MyHeader.vue";

let nombreUsuario = ref("");

let lista = ref(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);

</script>

<template>
  <div>
    <li><router-link to="/">Inicio</router-link></li>

    <MyHeader />  
    <form action="">
      <label for="username">Nombre de usuario</label>
      <input type="text" v-model="nombreUsuario" name="username" id="username" />
    </form>

    <p v-if="nombreUsuario !== ''">¡Bienvenido, {{ nombreUsuario }}!</p>

    <ul>
      <li v-for="item in lista" :key="item">{{ item }}</li>
    </ul>

    <button v-on:click="lista.push('N')">Añadir</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 1rem;
}

p {
  margin-top: 1rem;
}
</style>

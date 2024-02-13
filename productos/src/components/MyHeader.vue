<script setup>
defineProps({
})
</script>

<template>
  <header>
    <img src="../assets/logo.svg" alt="Logo">

    <ul>
      <li><router-link to="/usuarios">Usuarios</router-link></li>
      <li><router-link to="/productos">Productos</router-link></li>
    </ul>
  </header>
</template>

<style scoped>
 header {
  display: flex;
  flex-direction: row;
 }

 ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;

  margin: 5vw;
 }

 ul > li {
  font-size: 1.2rem;
  margin: 0.5vw;
 }

 img {
  width: 5vw;
 }
</style>

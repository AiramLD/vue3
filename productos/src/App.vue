<script setup>
import MyHeader from "./components/MyHeader.vue";
import Usuarios from "./components/Usuarios.vue";
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  5. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#app {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}


</style>

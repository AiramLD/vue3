<template>
  <div>
    <ul class="nav-menu">
      <li class="nav-item"><router-link to="/" class="nav-link">Inicio</router-link></li>
      <li class="nav-item"><router-link to="/usuarios" class="nav-link">Usuarios</router-link></li>
    </ul>

    <h1>Lista de Productos</h1>

    <input type="text" v-model="busqueda" placeholder="Buscar por nombre..." />
    <ul>
      <li v-for="producto in productosFiltrados" :key="producto.id">
        <div>
          <p>Nombre: {{ producto.name }}</p>
          <p>Precio: {{ producto.price }}</p>
          <button @click="agregarAlCarrito(producto)" class="btn btn-primary">Añadir al Carrito</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const dominio = "http://localhost:3000";
const productos = ref([]);
const busqueda = ref('');

const obtenerProductos = async () => {
  try {
    const response = await fetch(dominio + '/api/products');
    if (!response.ok) {
      throw new Error('Error al obtener la lista de productos');
    }
    productos.value = await response.json();
  } catch (error) {
    console.error('Error al obtener la lista de productos:', error);
  }
};

onMounted(() => {
  obtenerProductos();
});

const agregarAlCarrito = (producto) => {
  console.log('Añadir al carrito:', producto);
};

const productosFiltrados = computed(() => {
  const textoBusqueda = busqueda.value.toLowerCase();
  if (!textoBusqueda) return productos.value; // Si no hay texto de búsqueda, mostrar todos los productos
  return productos.value.filter(producto => producto.name.toLowerCase().includes(textoBusqueda));
});
</script>

<style scoped>
/* Estilos omitidos para mantener la respuesta más concisa */
</style>

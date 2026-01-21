<script setup>
import Navbar from './components/Navbar.vue'
// import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f5f5;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

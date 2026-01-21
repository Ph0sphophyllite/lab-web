<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <router-link to="/">XXX Lab</router-link>
      </div>
      <div class="navbar-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/publication" class="nav-link">Publications</router-link>
        <router-link to="/cv" class="nav-link">CV</router-link>
        <router-link to="/team" class="nav-link">Team</router-link>
        <router-link to="/project" class="nav-link">Projects</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Navbar component logic
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-brand a {
  color: white;
  text-decoration: none;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ddd;
}

.nav-link.router-link-active {
  color: #fff;
  font-weight: bold;
  border-bottom: 2px solid white;
  padding-bottom: 0.3rem;
}

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .navbar-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
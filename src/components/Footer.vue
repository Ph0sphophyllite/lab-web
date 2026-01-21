<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <h3>XXX Lab</h3>
        <p>Department of Computer Science</p>
        <p>University of XXX</p>
        <p>Email: lab@university.edu</p>
      </div>
      <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/publication">Publications</router-link></li>
          <li><router-link to="/cv">CV</router-link></li>
          <li><router-link to="/team">Team</router-link></li>
          <li><router-link to="/project">Projects</router-link></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} XXX Lab. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Footer component logic
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 2rem 0;
  margin-top: 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-info h3,
.footer-links h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.footer-info p {
  margin: 0.5rem 0;
  color: #ddd;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #555;
  color: #ddd;
}
</style>
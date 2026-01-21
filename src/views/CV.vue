<template>
  <div class="cv">
    <h1>Curriculum Vitae</h1>
    <div class="cv-content">
      <section class="personal-info">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> Professor XXX</p>
        <p><strong>Title:</strong> Professor of Computer Science</p>
        <p><strong>Email:</strong> xxx@university.edu</p>
        <p><strong>Office:</strong> Building X, Room XXX</p>
      </section>
      <section class="education">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Ph.D. in Computer Science</h3>
            <p>University of XYZ, 20XX</p>
          </li>
          <li>
            <h3>M.S. in Computer Science</h3>
            <p>University of ABC, 20XX</p>
          </li>
          <li>
            <h3>B.S. in Computer Science</h3>
            <p>University of DEF, 20XX</p>
          </li>
        </ul>
      </section>
      <section class="experience">
        <h2>Professional Experience</h2>
        <ul>
          <li>
            <h3>Professor</h3>
            <p>University of XXX, 20XX - Present</p>
          </li>
          <li>
            <h3>Associate Professor</h3>
            <p>University of XXX, 20XX - 20XX</p>
          </li>
          <li>
            <h3>Assistant Professor</h3>
            <p>University of XXX, 20XX - 20XX</p>
          </li>
        </ul>
      </section>
      <section class="awards">
        <h2>Awards and Honors</h2>
        <ul>
          <li>Best Paper Award, International Conference on Machine Learning, 2023</li>
          <li>NSF CAREER Award, 2020</li>
          <li>Outstanding Teaching Award, University of XXX, 2019</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
// CV page logic
</script>

<style scoped>
.cv {
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.cv-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

section {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #333;
}

p {
  margin: 0.3rem 0;
  color: #666;
}

strong {
  color: #333;
}
</style>
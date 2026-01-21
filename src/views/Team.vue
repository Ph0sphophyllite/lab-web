<template>
  <div class="team">
    <h1>Our Team</h1>
    <div class="team-list">
      <div class="team-member">
        <div class="member-info">
          <h2>Faculty</h2>
          <div class="member-card">
            <div class="member-photo">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20academic%20portrait%20of%20a%20professor&image_size=square" alt="Professor XXX">
            </div>
            <h3>Professor XXX</h3>
            <p>Principal Investigator</p>
            <p>Email: xxx@university.edu</p>
          </div>
        </div>
      </div>
      <div class="team-member">
        <div class="member-info">
          <h2>PhD Students</h2>
          <div class="member-card">
            <div class="member-photo">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20academic%20portrait%20of%20a%20graduate%20student&image_size=square" alt="John Doe">
            </div>
            <h3>John Doe</h3>
            <p>PhD Student</p>
            <p>Email: jdoe@university.edu</p>
          </div>
          <div class="member-card">
            <div class="member-photo">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20academic%20portrait%20of%20a%20female%20graduate%20student&image_size=square" alt="Jane Smith">
            </div>
            <h3>Jane Smith</h3>
            <p>PhD Student</p>
            <p>Email: jsmith@university.edu</p>
          </div>
        </div>
      </div>
      <div class="team-member">
        <div class="member-info">
          <h2>Master Students</h2>
          <div class="member-card">
            <div class="member-photo">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20academic%20portrait%20of%20a%20young%20student&image_size=square" alt="Bob Johnson">
            </div>
            <h3>Bob Johnson</h3>
            <p>Master Student</p>
            <p>Email: bjohnson@university.edu</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Team page logic
</script>

<style scoped>
.team {
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

.team-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.team-member {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.member-info h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}

.member-card {
  text-align: center;
  margin-bottom: 1.5rem;
}

.member-photo {
  margin-bottom: 1rem;
}

.member-photo img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.member-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  color: #333;
}

.member-card p {
  margin: 0.3rem 0;
  color: #666;
}
</style>
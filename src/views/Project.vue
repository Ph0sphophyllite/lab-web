<template>
  <div class="project">
    <h1>Project</h1>
    <div class="main-project">
      <h2>Autonomous Driving and Robots in Mines</h2>
      <p>After more than 20 years of accumulation, the development path of unmanned mining is clear. Although China started relatively late, its industry has obvious pain points and is strongly supported by policies, resulting in a rapid overall development.</p>
      
      <div class="project-sections">
        <div class="section">
          <h3>Data and Perception</h3>
          <div class="research-results">
            <ul>
              <li>The world's first standard dataset for open-pit mining areas, <strong>AutoMine</strong>, consists of 36,000 images and the corresponding point cloud data.</li>
              <li>The first mining area positioning and navigation benchmark, <strong>AutoMine-Navi</strong>, provides experimental benchmarks for multi-source location algorithms of multi-type platforms in mining areas.</li>
              <li>Large-scale visual benchmarks for mining areas, supporting 11 different types of visual tasks, including detection, tracking, segmentation, etc. and providing cross-platform and cross-domain experimental verification.</li>
              <li v-if="showAllDataPerception">The first parallel simulation dataset for autonomous driving in mines, <strong>PMScenes</strong>, including driving records of more than 18 hours.</li>
              <li v-if="showAllDataPerception">Online calibration algorithm for mining areas which meets the real-time requirements, and the acquisition platform can achieve a translation error of less than 0.2m within 10 frames.</li>
              <li v-if="showAllDataPerception">Binocular stereo matching benchmark, <strong>OpenStereo</strong>, fills the gap of the lack of a unified reference for binocular stereo matching.</li>
              <li v-if="showAllDataPerception">Lightweight binocular stereo matching, <strong>LightStereo</strong>, achieves the balance between precision and efficiency.</li>
              <li v-if="showAllDataPerception">High generalization binocular stereo matching, <strong>Stereo Anything</strong>, achieves multi-scene zero-shot generalization capability.</li>
              <li v-if="showAllDataPerception">Multimodal self-supervised training of large models, <strong>MetaAdapter</strong>, achieves rapid adaptation from general fields to vertical fields and provides a new solution for the automatic annotation of mine data.</li>
              <li v-if="showAllDataPerception">3D reconstruction of complex scenes, <strong>DriveSplat</strong>, achieves high-precision 3D reconstruction and new perspective synthesis of dynamic driving scenes.</li>
              <li v-if="showAllDataPerception"><strong>UniScene3D</strong>, reconstructing unstructured scenes to solve the problems of perceiving irregular obstacles and planning bumpy roads.</li>
              <li v-if="showAllDataPerception">A large model, <strong>Surds</strong>, achieves precise spatial understanding and reasoning of visual language models in autonomous driving scenarios.</li>
              <li v-if="showAllDataPerception">Direct model navigation in unknown environments, <strong>WMNav</strong>, achieves zero-shot efficient navigation in complex and unknown environments.</li>
              <li v-if="showAllDataPerception">Offline reinforcement learning based on diffusion strategy of distribution matching generator, <strong>DMGDP</strong>, effectively solves the problem of being unable to handle the conflict between discriminator deception and reward maximization in generative policy reinforcement learning and significantly improves the decision-making performance of offline reinforcement learning in sparse reward environments.</li>
            </ul>
            <button v-if="!showAllDataPerception" @click="toggleDataPerception" class="toggle-btn">Show All</button>
            <button v-else @click="toggleDataPerception" class="toggle-btn">Show Less</button>
          </div>
        </div>
        
        <div class="section">
          <h3>Planning and Control</h3>
          <div class="research-results">
            <ul>
              <li>The first to propose a planning model for emergencies: <strong>Parallel Planning</strong>. The success rate of vehicle planning for emergencies has increased by 121%.</li>
              <li>Interpretable motion planning algorithm for autonomous driving in complex scenarios, <strong>InstructDriver</strong>, achieves high-performance open-loop and closed-loop motion planning in complex driving scenarios.</li>
              <li>Safe navigation and obstacle avoidance in complex scene clusters: Compared with leading methods such as MAPPO and distributed CBF, the success rate of safe navigation has increased by three times.</li>
              <li v-if="showAllPlanningControl">Proposing an efficient model for generating emergency driving scenarios, <strong>AdvDiffuser</strong>, which decreases the single generation time for emergency driving scenarios to less than 0.1 seconds.</li>
              <li v-if="showAllPlanningControl">The first generative end-to-end autonomous driving model within the industry, <strong>GenAD</strong>, achieves a balance between precision and efficiency and is a brand-new end-to-end solution for generative methods.</li>
              <li v-if="showAllPlanningControl">The first generative end-to-end autonomous driving model based on the diffusion model, <strong>GenADv2</strong>.</li>
              <li v-if="showAllPlanningControl">Interpretable end-to-end autonomous driving model, <strong>HIIL</strong>, achieves stable planning control for interpretability in complex scenarios.</li>
              <li v-if="showAllPlanningControl">The first end-to-end autonomous driving model for heavy-duty trucks within the industry, <strong>FusionPlanner</strong>, achieves stable control of muddy unstructured roads.</li>
              <li v-if="showAllPlanningControl">An end-to-end autonomous driving dataset integrating virtual and real elements, <strong>PED</strong>, provides rich virtual-real fusion data resources for end-to-end model training.</li>
              <li v-if="showAllPlanningControl">The first simulation test platform for autonomous driving in mines covers over 1,000 open-pit mine scenarios, which can stably support long-term production tests for more than 24 hours.</li>
            </ul>
            <button v-if="!showAllPlanningControl" @click="togglePlanningControl" class="toggle-btn">Show All</button>
            <button v-else @click="togglePlanningControl" class="toggle-btn">Show Less</button>
          </div>
        </div>
        
        <div class="section">
          <h3>Results</h3>
          <div class="research-results">
            <ul>
              <li><strong>CarMo</strong>, a forward-designed mine transportation equipment, achieves pre-installation of autonomous driving systems.</li>
              <li><strong>CarMo100</strong>, with higher reliability, adaptability, integrity, security, intelligence, and gas-efficiency.</li>
              <li><strong>YuKon Large Model System</strong>, fulfilling large-scale replication of smart mine factories.</li>
              <li v-if="showAllResults">Full-stack intelligent mine solution: The vehicle-road-cloud systemaltization combined with the coordination of software and hardware comprehensively addresses the digital and intelligent demands of mines.</li>
            </ul>
            <button v-if="!showAllResults" @click="toggleResults" class="toggle-btn">Show All</button>
            <button v-else @click="toggleResults" class="toggle-btn">Show Less</button>
          </div>
        </div>

        <div class="section">
          <h3>Applications</h3>
          <div class="research-results">
            <ul>
              <li>Autonomous driving in mines</li>
              <li>Unmanned mining truck</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 控制每个部分是否显示全部研究成果
const showAllDataPerception = ref(false)
const showAllPlanningControl = ref(false)
const showAllResults = ref(false)
const showAllApplications = ref(false)

// 切换显示状态的函数
const toggleDataPerception = () => {
  showAllDataPerception.value = !showAllDataPerception.value
}

const togglePlanningControl = () => {
  showAllPlanningControl.value = !showAllPlanningControl.value
}

const toggleResults = () => {
  showAllResults.value = !showAllResults.value
}

const toggleApplications = () => {
  showAllApplications.value = !showAllApplications.value
}
</script>

<style scoped>
.project {
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

.main-project {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-project h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}

.main-project > p {
  margin-bottom: 2rem;
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
}

.project-sections {
  margin-top: 3rem;
}

.section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.section p {
  margin-bottom: 1.5rem;
  color: #666;
  line-height: 1.6;
}

.research-results {
  margin-top: 1.5rem;
}

.research-results h4 {
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #333;
}

.research-results ul {
  padding-left: 1.5rem;
  color: #666;
}

.research-results li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.toggle-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  background-color: #e0e0e0;
  border-color: #ccc;
}

.toggle-btn:active {
  transform: translateY(1px);
}
</style>
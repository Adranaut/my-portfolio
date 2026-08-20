import {
  generateSkillCardTemplate,
  generateEducationCardTemplate,
  generateTrainingCardTemplate,
  generateExperienceCardTemplate,
  generateProjectCardTemplate,
  generateAchievementCardTemplate,
} from "../../templates.js";
import skills from "../../data/local/skills.js";
import educations from "../../data/local/educations.js";
import training from "../../data/local/training.js";
import experiences from "../../data/local/experiences.js";
import projects from "../../data/local/projects.js";
import achievements from "../../data/local/achievements.js";

class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="summary" id="summary">
            <div class="summary-container">
                <div class="photo-wrapper">
                    <img src="./images/profile.webp" alt="Foto Profile" class="photo-profile" />
                </div>

                <div class="info-box">
                    <div class="text">
                        <h3>Hallo, saya</h3>
                        <h1>Asep Ramdani</h1>
                        <span>Fullstack Developer</span>
                        <p>Lulusan Teknik Informatika di Universitas Teknologi Bandung dengan predikat cumlaude. Meraih penghargaan “Wisudawan dengan Skripsi Terbaik” atas pengembangan aplikasi “SiagaKu” serta “Capstone Project Terbaik” pada program SIB Dicoding Cycle 6. Memiliki pengetahuan di bidang IT, termasuk penanganan masalah perangkat keras (hardware troubleshooting) dan konfigurasi sistem operasi. Berfokus pada spesialisasi Back-End Development dengan penggunaan Node.js, PostgreSQL, dan metodologi Scrum. Baru saja menyelesaikan program intensif bahasa Jepang (April 2026) dan siap memberikan kontribusi profesional, baik bagi tim teknis maupun administratif.</p>
                    </div>

                    <div class="socials">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ramdani.asep001@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope"></i></a>
                        <a href="https://wa.me/6283829801796" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/_asep_ramdani/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://github.com/Adranaut" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/-asep-ramdani/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <section class="skill" id="skill">
            <h2 class="section-title">Keahlian</h2>
            
            <div class="skills-grid">
                ${skills.map((skill) => generateSkillCardTemplate(skill)).join("")}
            </div>

        </section>
        
        <section class="education" id="education">
            <h2 class="section-title">Pendidikan</h2>

            <div class="education-flow-container">
                ${educations.map((education) => generateEducationCardTemplate(education)).join("")}
            </div>
        </section>

        <section class="training" id="training">
            <h2 class="section-title">Pelatihan</h2>

            <div class="training-container">
                ${training.map((training) => generateTrainingCardTemplate(training)).join("")}
            </div>
        </section>

        <section id="experience" class="experience">
            <h2 class="section-title">Pengalaman</h2>

            <div class="experience-cards-container">
                ${experiences.map((experience) => generateExperienceCardTemplate(experience)).join("")}
            </div>
        </section>

        <section id="project" class="project">
            <h2 class="section-title">Proyek</h2>

            <div class="project-grid">
                ${projects.map((project) => generateProjectCardTemplate(project)).join("")}
            </div>
        </section>

        <section class="achievement" id="achievement">
            <h2 class="section-title">Pencapaian</h2>

            <div class="achievement-wrapper">
                <div class="achievement-content">
                    ${achievements.map((achievement) => generateAchievementCardTemplate(achievement)).join("")}
                </div>

                <div class="achievement-visual">
                    <div class="achieve-image-box">
                        <img src="./images/wisuda.webp" alt="Dokumentasi Wisuda Asep Ramdani" class="photo-wisuda" />
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define("home-page", HomePage);

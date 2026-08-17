class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML += `
        <section class="summary" id="summary">
            <div class="summary-container">
                <div class="photo-wrapper">
                    <img src="./images/profile.jpg" alt="Foto Profile" class="photo-profile" />
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
                <div class="skill-card">
                    <div class="skill-header">
                        <i class="fa-solid fa-code"></i>
                        <h3>Bahasa Pemrograman</h3>
                    </div>
                    <div class="skill-tags">
                        <span>JavaScript</span>
                    </div>
                </div>

                <div class="skill-card">
                    <div class="skill-header">
                        <i class="fa-solid fa-globe"></i>
                        <h3>Web</h3>
                    </div>
                    <div class="skill-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Node.js</span>
                    </div>
                </div>

                <div class="skill-card">
                    <div class="skill-header">
                        <i class="fa-solid fa-database"></i>
                        <h3>Database</h3>
                    </div>
                    <div class="skill-tags">
                        <span>PostgreSQL</span>
                        <span>MySQL</span>
                    </div>
                </div>

                <div class="skill-card">
                    <div class="skill-header">
                        <i class="fa-brands fa-windows"></i>
                        <h3>Sistem Operasi</h3>
                    </div>
                    <div class="skill-tags">
                        <span>Windows</span>
                        <span>Linux Ubuntu</span>
                    </div>
                </div>

                <div class="skill-card">
                    <div class="skill-header">
                        <i class="fa-solid fa-file-excel"></i>
                        <h3>Administrasi Data</h3>
                    </div>
                    <div class="skill-tags">
                        <span>Microsoft Office</span>
                        <span>Google Workspace</span>
                    </div>
                </div>

                <div class="skill-card">
                    <div class="skill-header">
                        <i class="fa-solid fa-screwdriver-wrench"></i>
                        <h3>Teknis & Hardware</h3>
                    </div>
                    <div class="skill-tags">
                        <span>Perakitan Komputer</span>
                        <span>Hardware Troubleshooting</span>
                    </div>
                </div>

                <div class="skill-card language-card">
                    <div class="skill-header">
                        <i class="fa-solid fa-language"></i>
                        <h3>Bahasa Asing</h3>
                    </div>
                    <div class="lang-list">
                        <div class="lang-item">
                            <div class="lang-info">
                                <strong>Inggris</strong>
                                <span class="cert-name">TOEFL</span>
                            </div>
                            <span class="score-badge">530 / 677</span>
                        </div>

                        <div class="lang-item">
                            <div class="lang-info">
                                <strong>Jepang</strong>
                                <span class="cert-name">JFT-Basic A2</span>
                            </div>
                            <span class="score-badge">233 / 250</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        
        <section class="education" id="education">
            <h2 class="section-title">Pendidikan</h2>

            <div class="education-flow-container">
                <div class="education-content">
                    <div class="edu-top">
                        <h3 class="campus-name">Universitas Teknologi Bandung</h3>
                        <p class="major-name">S1 Teknik Informatika</p>
                        <span class="edu-year-pill"><i class="fa-regular fa-calendar"></i> 2021 — 2025</span>
                    </div>

                    <div class="edu-stats-row">
                        <div class="stat-pill">
                            <i class="fa-solid fa-star"></i>
                            <span>IPK 3.78 / 4.00</span>
                        </div>
                        <div class="stat-pill highlight">
                            <i class="fa-solid fa-medal"></i>
                            <span>Cum Laude</span>
                        </div>
                    </div>

                    <div class="edu-list-items">
                        <div class="list-row">
                            <i class="fa-solid fa-book-bookmark"></i>
                            <div class="list-text">
                                <h4>Fokus Penelitian & Skripsi</h4>
                                <p>“Perancangan Aplikasi Panggilan Darurat dan Pertolongan Pertama Indonesia SiagaKu Berbasis Android”</p>
                            </div>
                        </div>

                        <div class="list-row">
                            <i class="fa-solid fa-code-branch"></i>
                            <div class="list-text">
                                <h4>Metodologi & Praktik</h4>
                                <p>Penerapan manajemen proyek perangkat lunak menggunakan kerangka kerja Scrum.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="education-visual">
                    <img src="./images/kampus.jpg" alt="Kampus Universitas Teknologi Bandung" />
                </div>
            </div>
        </section>

        <section class="training" id="training">
            <h2 class="section-title">Pelatihan</h2>

            <div class="training-container">
     
                <div class="training-visual">
                    <div class="training-image-wrapper">
                        <img src="./images/nihon.png" alt="Kanji Nihon" class="training-img" />
                    </div>
                </div>

                <div class="training-content">
                    <div class="training-header">
                        <h3 class="training-institute">Universitas Teknologi Bandung</h3>
                        <p class="training-program">Program Intensif Bahasa Jepang & SSW</p>
                        <span class="training-period-pill"><i class="fa-regular fa-calendar"></i> 2025 — 2026</span>
                    </div>

                    <div class="training-tags">
                        <span class="tag-pill"><i class="fa-solid fa-book"></i> Minna no Nihongo</span>
                        <span class="tag-pill highlight"><i class="fa-solid fa-certificate"></i> JFT-Basic A2</span>
                        <span class="tag-pill"><i class="fa-solid fa-wrench"></i> SSW Otomotif</span>
                    </div>

                    <div class="training-details-list">
                        <div class="training-item">
                            <i class="fa-solid fa-square-check"></i>
                            <p>Pendalaman tata bahasa, percakapan sehari-hari, serta penguasaan Kanji dasar hingga menengah berbasis kurikulum terstandarisasi.</p>
                        </div>

                        <div class="training-item">
                            <i class="fa-solid fa-square-check"></i>
                            <p>Persiapan dan pencapaian sertifikasi kompetensi bahasa Jepang <strong>JFT-Basic A2</strong> untuk standar komunikasi kerja profesional.</p>
                        </div>

                        <div class="training-item">
                            <i class="fa-solid fa-square-check"></i>
                            <p>Pemahaman materi teknis spesialisasi <em>Specified Skilled Worker</em> (SSW) di bidang perawatan dan perbaikan kendaraan bermotor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="experience" class="experience">
            <h2 class="section-title">Pengalaman</h2>

            <div class="experience-cards-container">
                <div class="exp-card">
                    <div class="exp-card-header">
                        <div class="exp-logo-box">
                            <img src="./images/dicoding.jpg" alt="Logo Dicoding" class="company-logo" />
                        </div>
                        <div class="exp-role-info">
                            <h3 class="company-name">SIB Dicoding Cycle 6</h3>
                            <span class="role-badge">Frontend & Backend Web Development</span>
                            <span class="exp-duration"><i class="fa-regular fa-calendar"></i> Februari — Juni 2024</span>
                        </div>
                    </div>

                    <div class="star-framework">
                        <div class="star-item">
                            <span class="star-tag situation">Situation</span>
                            <p>Kurangnya platform digital interaktif untuk melestarikan dan mempelajari Aksara Jawa kuno di kalangan generasi muda.</p>
                        </div>

                        <div class="star-item">
                            <span class="star-tag task">Task</span>
                            <p>Merancang dan mengembangkan platform <strong>"JAksara"</strong> sebagai solusi pembelajaran dan kuis Aksara Jawa berbasis web.</p>
                        </div>

                        <div class="star-item">
                            <span class="star-tag action">Action</span>
                            <p>Mengelola arsitektur database dengan <strong>PostgreSQL</strong>, membangun Back-End API menggunakan <strong>Node.js</strong>, pengujian API via Postman, serta deployment melalui Vercel dan koordinasi tim via GitHub.</p>
                        </div>

                        <div class="star-item">
                            <span class="star-tag result">Result</span>
                            <p>Terpilih sebagai <strong>"Capstone Project Terbaik"</strong> dari puluhan tim atas kualitas teknis dan dampak kontribusinya pada bidang edukasi budaya.</p>
                        </div>
                    </div>
                </div>

                <div class="exp-card">
                    <div class="exp-card-header">
                        <div class="exp-logo-box">
                            <img src="./images/bangkit.jpg" alt="Logo Bangkit Academy" class="company-logo" />
                        </div>
                        <div class="exp-role-info">
                            <h3 class="company-name">Bangkit Academy Batch 5</h3>
                            <span class="role-badge">Mobile Development</span>
                            <span class="exp-duration"><i class="fa-regular fa-calendar"></i> Agustus — Desember 2023</span>
                        </div>
                    </div>

                    <div class="star-framework">
                        <div class="star-item">
                            <span class="star-tag situation">Situation</span>
                            <p>Dibutuhkan aplikasi tanggap darurat yang efisien dan cepat tanggap untuk membantu masyarakat dalam kondisi gawat darurat.</p>
                        </div>

                        <div class="star-item">
                            <span class="star-tag task">Task</span>
                            <p>Membangun aplikasi Android <strong>"SiagaKu"</strong> yang mengintegrasikan fitur panggilan darurat dan panduan pertolongan pertama.</p>
                        </div>

                        <div class="star-item">
                            <span class="star-tag action">Action</span>
                            <p>Mengembangkan aplikasi dengan <strong>Kotlin & Android Studio</strong>, mengintegrasikan <strong>Machine Learning</strong> untuk Chatbot pertolongan pertama, serta <strong>Google Maps API & GPS</strong> untuk pemetaan fasilitas terdekat.</p>
                        </div>

                        <div class="star-item">
                            <span class="star-tag result">Result</span>
                            <p>Berhasil merilis aplikasi fungsional yang dijadikan materi riset skripsi dan meraih predikat <strong>"Skripsi Terbaik"</strong> di Universitas Teknologi Bandung.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="projects">
            <h2 class="section-title">Proyek</h2>

            <div class="projects-grid">

                <div class="project-card">
                    <div class="project-image-box">
                        <img src="./images/project2.jpg" alt="Platform JAksara" />
                        <span class="project-category">Web Platform</span>
                    </div>

                    <div class="project-content">
                        <h3 class="project-title">JAksara — Aksara Jawa Interactive</h3>
                        <p class="project-desc">
                        Platform interaktif untuk pelestarian budaya dan pembelajaran kuis Aksara Jawa kuno berbasis web dengan sistem penilaian dinamis dan manajemen RESTful API.
                        </p>

                        <div class="project-tech-stack">
                            <span>Node.js</span>
                            <span>PostgreSQL</span>
                            <span>JavaScript</span>
                            <span>Vercel</span>
                        </div>

                        <div class="project-btn-group">
                            <a href="#" class="project-btn demo-btn" target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                            </a>
                            <a href="https://github.com/Adranaut" class="project-btn github-btn" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image-box">
                        <img src="./images/project1.jpg" alt="Aplikasi SiagaKu" />
                        <span class="project-category">Mobile App</span>
                    </div>

                    <div class="project-content">
                        <h3 class="project-title">SiagaKu — Emergency & First Aid</h3>
                        <p class="project-desc">
                        Aplikasi tanggap darurat berbasis Android yang mengintegrasikan layanan panggilan darurat, chatbot panduan pertolongan pertama berbasis ML, serta pemetaan fasilitas medis terdekat.
                        </p>

                        <div class="project-tech-stack">
                            <span>Kotlin</span>
                            <span>Android Studio</span>
                            <span>Machine Learning</span>
                            <span>Google Maps API</span>
                        </div>

                        <div class="project-btn-group">
                            <a href="#" class="project-btn demo-btn" target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                            </a>
                            <a href="https://github.com/Adranaut" class="project-btn github-btn" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image-box">
                        <img src="./images/project3.jpg" alt="Web Portofolio" />
                        <span class="project-category">Front-End Design</span>
                    </div>

                    <div class="project-content">
                        <h3 class="project-title">Creative Interactive Portfolio</h3>
                        <p class="project-desc">
                        Website portofolio interaktif yang dibangun menggunakan Web Components, custom CSS styling modern, serta navigasi responsif dan ramah pengguna.
                        </p>

                        <div class="project-tech-stack">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>Web Components</span>
                        </div>

                        <div class="project-btn-group">
                            <a href="#" class="project-btn demo-btn" target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                            </a>
                            <a href="https://github.com/Adranaut" class="project-btn github-btn" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="achievement" id="achievement">
            <h2 class="section-title">Penghargaan</h2>

            <div class="achievement-wrapper">
                <div class="achievement-content">
                    <div class="achievement-item">
                        <div class="achieve-marker">
                            <i class="fa-solid fa-trophy"></i>
                        </div>
                        <div class="achieve-details">
                            <div class="achieve-header">
                                <span class="achieve-year">2025</span>
                            </div>
                            <h3 class="achieve-title">Wisudawan dengan Skripsi Terbaik</h3>
                            <p class="achieve-desc">
                                Meraih penghargaan <strong>“Skripsi Terbaik”</strong> untuk skripsi berjudul <em>“Perancangan Aplikasi Panggilan Darurat dan Pertolongan Pertama Indonesia SiagaKu Berbasis Android”</em> di Program Studi Teknik Informatika, Universitas Teknologi Bandung.
                            </p>
                        </div>
                    </div>

                    <div class="achievement-item">
                        <div class="achieve-marker">
                            <i class="fa-solid fa-medal"></i>
                        </div>
                        <div class="achieve-details">
                            <div class="achieve-header">
                                <span class="achieve-year">2024</span>
                            </div>
                            <h3 class="achieve-title">Capstone Project Terbaik SIB Dicoding Cycle 6</h3>
                            <p class="achieve-desc">
                                Meraih predikat <strong>“Capstone Project Terbaik”</strong> atas pengembangan platform <strong>“JAksara”</strong> (Aksara Jawa), sebuah solusi pembelajaran dan kuis Aksara Jawa kuno berbasis web yang berdampak pada pelestarian budaya dan edukasi.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="achievement-visual">
                    <div class="achieve-image-box">
                        <img src="./images/wisuda.JPG" alt="Dokumentasi Wisuda Asep Ramdani" class="photo-wisuda" />
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define("home-page", HomePage);

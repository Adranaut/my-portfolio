class FooterBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML += `
        <footer class="main-footer">
          <div class="footer-container">
  
            <div class="footer-col brand-col">
              <h3 class="footer-logo">Asep Ramdani</h3>
              <p class="footer-bio">
                Software Engineer & Fullstack Developer yang berfokus pada Back-End Development (Node.js & PostgreSQL), arsitektur web modern, serta manajemen proyek berbasis Scrum.
              </p>
              <div class="availability-status">
                <span class="status-dot"></span>
                <span>Terbuka untuk Peluang Kerja & Kolaborasi</span>
              </div>
            </div>

            <div class="footer-col">
              <h4>Navigasi</h4>
              <ul class="footer-links">
                <li><a href="#summary">Ringkasan</a></li>
                <li><a href="#skill">Keahlian</a></li>
                <li><a href="#education">Pendidikan</a></li>
                <li><a href="#training">Pelatihan</a></li>
                <li><a href="#experience">Pengalaman</a></li>
                <li><a href="#projects">Proyek</a></li>
                <li><a href="#achievement">Penghargaan</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Kontak Langsung</h4>
              <div class="footer-contact-items">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ramdani.asep001@gmail.com" target="_blank" class="contact-link">
                  <i class="fa-solid fa-envelope"></i>
                  <span>ramdani.asep001@gmail.com</span>
                </a>
                <a href="https://wa.me/6283829801796" target="_blank" rel="noopener noreferrer" class="contact-link">
                  <i class="fa-brands fa-whatsapp"></i>
                  <span>+62 838-2980-1796</span>
                </a>
                <div class="contact-link static">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Bandung, Jawa Barat, Indonesia</span>
                </div>
              </div>

              <div class="footer-socials">
                <a href="https://www.instagram.com/_asep_ramdani/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://github.com/Adranaut" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/-asep-ramdani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p class="copyright">© 2026 Asep Ramdani.</p>
            <a href="#summary" class="back-to-top" aria-label="Kembali ke atas">
              <i class="fa-solid fa-arrow-up"></i>
            </a>
          </div>
        </footer>
    `;
  }
}

customElements.define("footer-bar", FooterBar);

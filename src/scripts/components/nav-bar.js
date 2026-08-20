class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML += `
        <header class="navbar-header">
          <div class="nav-brand">
            <a href="#summary">AR<span>.</span></a>
          </div>

          <ul class="nav-links" id="nav-links">
            <li><a href="#summary">Ringkasan</a></li>
            <li><a href="#skill">Keahlian</a></li>
            <li><a href="#education">Pendidikan</a></li>
            <li><a href="#training">Pelatihan</a></li>
            <li><a href="#experience">Pengalaman</a></li>
            <li><a href="#project">Proyek</a></li>
            <li><a href="#achievement">Pencapaian</a></li>
          </ul>

          <div class="nav-actions">
            <i class="fa-solid fa-bars-staggered" id="menu-icon" aria-label="Toggle Menu"></i>
          </div>
        </header>
    `;
  }
}

customElements.define("nav-bar", NavBar);

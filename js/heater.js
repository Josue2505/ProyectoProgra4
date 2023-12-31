class MiHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `    
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <div class="container">
          <div class="logo">
            <a href="index.html" style="min-width: 7rem;">
              <img src="Imagenes/Beigo.jpeg" alt="Logo" width="142">
            </a>
          </div>
  
          <form class="form-inline" id="searchForm">
              <input class="form-control mr-sm-2" type="search" placeholder="Juegos" aria-label="Search" id="searchInput">
          </form>
  
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-start" 
                  aria-controls="navbar-start" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbar-start">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            
              <li class="nav-item">
                <a class="nav-link" href="index.html">Inicio</a>
              </li>

              <li class="nav-item">
                <button class="btn btn-link nav-link" data-bs-toggle="collapse" data-bs-target="#submenuNintendo" aria-controls="submenuNintendo" aria-expanded="false">
                  Nintendo
                </button>
                <div class="collapse" id="submenuNintendo">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" href="nintendo.html">Switch</a>
                    </li>
                  </ul>
                </div>
              </li>
  
              <li class="nav-item">
                <button class="btn btn-link nav-link" data-bs-toggle="collapse" data-bs-target="#submenuPlayStation" aria-controls="submenuPlayStation" aria-expanded="false">
                  PlayStation
                </button>
                <div class="collapse" id="submenuPlayStation">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" href="ps4.html">PlayStation 4</a>
                    </li>
                  </ul>

                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" href="ps5.html">PlayStation 5</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="AboutUs.html">Acerca de Nosotros</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="creadores.html">Creadores</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="Contacto.html">Contacto</a>
              </li>
  
            </ul>
  
          </div>
  
        </div>
  
      </nav>
        `
    }
}
customElements.define('mi-header', MiHeader);
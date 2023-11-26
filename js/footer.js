

class MiFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `    
            <div class="footer-line"></div>
                <div class="footer-wrapper">
                
                    <div class="footer-columns">

                        <section class="footer-logo">
                            <h2>
                                <a href="index.html" style="min-width: 7rem;">
                                    <img src="Imagenes/Beigo.jpeg" alt="Logo" width="110">
                                </a>
                           </h2>
                        </section>

                        <section>
                            <h3>Product</h3>
                            <ul>
                                <li>
                                    <a href="nintendo.html" title="Nintendo">Nintendo</a>
                                </li>
                                <li>
                                    <a href="ps4.html" title="PS4">Play Station 4</a>
                                </li>
                                <li>
                                    <a href="ps5.html" title="PS5">Play Station 5</a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3>Company</h3>
                            <ul>
                                <li>
                                    <a href="AboutUs.html" title="About Us">About Us</a>
                                </li>

                                <li>
                                    <a href="creadores.html" title="Creators">Creators</a>
                                </li>

                                <li>
                                    <a href="Contacto.html" title="Contatc">Contact</a>
                                </li>
                            </ul>
                        </section>
                    
                    </div>

                    <div class="footer-bottom">
                        <div class='social-links'>
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/josue02505/" title="Instagram/@josue02505">
                                        <img src="Imagenes/instagram.png" alt='Instagram'>                       
                                    </a>
                                </li>
                            
                                <li>
                                    <a href="https://www.instagram.com/gemelyd_/" title="Instagram/@gemelyd">
                                        <img src="Imagenes/instagram.png" alt='Instagram'>                       
                                    </a>
                                </li>

                                <li>
                                    <a href="https://twitter.com/Josue02505" title="Twitter">
                                        <img src="Imagenes/twitter.png" alt='Twitter'>
                                    </a>
                                </li>
                            
                            </ul>
                        </div>

                        <small>© Beigo VideoGame. <span id="year">2023</span>, All rights reserved</small>
                    </div>
                </div>
            `
    }
}
customElements.define('mi-footer', MiFooter);
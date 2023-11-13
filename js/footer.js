

class MiFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `    
        <div class="footer-line"></div>
            <div class="footer-wrapper">
                
                <div class="footer-columns">

                    <section class="footer-logo">
                        <h2>
                            <svg width="2103" height="1996" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <image x="0" y="0" width="800" height="700" xlink:href="Imagenes/Beigo.jpeg"/>
                                
                            </svg>
                        </h2>
                    </section>

                    <section>
                        <h3>Product</h3>
                        <ul>
                            <li>
                                <a href="#" title="API">Nintendo</a>
                            </li>
                            <li>
                                <a href="#" title="PS4">Play Station 4</a>
                            </li>
                            <li>
                                <a href="#" title="PS5">Play Station 5</a>
                            </li>
                            <li>
                                <a href="#" title="Release Notes">Release Notes</a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Company</h3>
                        <ul>
                            <li>
                                <a href="AboutUs.html" title="About Us">About Us</a>
                            </li>
                            </li>
                            <li>
                                <a href="creadores.html" title="Creators">Creators</a>
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
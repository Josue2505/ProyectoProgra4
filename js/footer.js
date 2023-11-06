

class MiFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `    
        <h1>Pie de pagina</h1>
              `
    }
}
customElements.define('mi-footer', MiFooter);
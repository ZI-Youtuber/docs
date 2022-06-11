class Tryit extends HTMLElement {
  static get observedAttributes() {
    return ["html", "css", "js"];
  }
  
  constructor() {
    super();
    
    let iframe = document.createElement("iframe")
    iframe.sandbox = "allow-scripts"
    let text = document.createElement("textarea")
    text.spellcheck = false
    text.setAttribute("data-gramm", "false")
    text.value = this.getAttribute("code")
    text.oninput = (event) => {
      update()
    }
    this.append(text, iframe)
    
    let update = () => {
    	iframe.srcdoc = text.value
    }
    
    update()
  }
  
  connectedCallback() {
  }
};

customElements.define("try-it", Tryit);
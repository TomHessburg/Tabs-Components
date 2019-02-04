class Dropdown {
  constructor(element) {
    
    this.element = document.querySelector(".dropdown");
    
    this.button = this.element.querySelector(".dropdown-button");
    
    this.content = document.querySelector(".dropdown-content");
    
    this.button.addEventListener('click', () => {
        this.toggleContent();
    })
  }

  toggleContent() {  //.color-fader -> .dropdown-link
    
    if( this.content.classList.contains("dropdown-animate-off") ){
      this.content.classList.add("dropdown-animate-on");
      this.content.classList.remove("dropdown-animate-off");
      this.content.classList.toggle("dropdown-hidden");
    }else{
      this.content.classList.remove("dropdown-animate-on");
      this.content.classList.add("dropdown-animate-off");
      setTimeout(() => {this.content.classList.toggle("dropdown-hidden")}, 400);
    }
  }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
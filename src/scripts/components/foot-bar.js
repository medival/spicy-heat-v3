class footBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<footer>
			 <div class="footer__content">
         <p> Crafted by me to everyone with spirit!</p>
         <p class="footer__copyright"> Copyright &copy; 2021 - Spicy Heat </p>
         <div class="footer__social-media-icons">
            <a href="#" class="social-icons social-icon-twitter">
              <i class="fa fa-lg fa-twitter"></i>
            </a>
            <a href="#" class="social-icons social-icon-linkedin">
              <i class="fa fa-lg fa-linkedin"></i>
            </a>
            <a href="https://github.com/medival"  target="_blank" class="social-icons social-icon-github">
              <i class="fa fa-lg fa-github"></i>
            </a>
         </div>
        </div>
		</footer>
		`;
  }
}

customElements.define("foot-bar", footBar);

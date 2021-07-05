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
			</div>
		</footer>
		`;
  }
}

customElements.define('foot-bar', footBar);

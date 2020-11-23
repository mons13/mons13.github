class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Castellanos Buendia Sarahi Monserrat`;
  }
}
customElements.define("mi-footer", MiFooter);

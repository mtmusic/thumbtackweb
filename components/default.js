class Default extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <h1 class="text-red-500">Hello World!</h1>
        `;
    }
}

customElements.define('js-default', Default);
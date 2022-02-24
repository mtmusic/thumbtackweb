class DefaultProp extends HTMLElement {
    connectedCallback() {
        var name = this.attributes.name.value;
        this.innerHTML = `<h1>Hello ${name}!</h1>`;
    }
}

customElements.define('js-default-prop', DefaultProp);
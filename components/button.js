class Button extends HTMLElement {
    connectedCallback() {
        var text    = this.attributes.text.value;
        var onclick = this.attributes.onclick.value;
        var id      = this.attributes.button_id.value;
        this.innerHTML = `<button id="${id}" class="text-2xl bg-zinc-900 rounded-xl p-3 hover:bg-zinc-500 transition-all duration-100" onclick=${onclick}>${text}</button>`;
    }
}

customElements.define('js-button', Button);
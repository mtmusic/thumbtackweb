class NavBarItem extends HTMLElement {
    connectedCallback() {
        var text = this.attributes.text.value;
        var to   = this.attributes.to.value;
        this.innerHTML = `<a class="rounded-xl text-2xl p-3 hover:bg-zinc-600 hover:text-gray-200 transition-all duration-150" href=${to}>${text}</a>`;
    }
}

customElements.define('js-navbaritem', NavBarItem);
class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="flex m-0 p-4 items-center justify-between bg-gradient-to-r bg-zinc-700 text-white">
            <h1 class="text-3xl">Thumbtack Web</h1>
            <div>
                <js-navbaritem text="About" to="/about.html"></js-navbaritem>
                <js-navbaritem text="Pricing" to="/pricing.html"></js-navbaritem>
                <js-navbaritem text="Home" to="/"></js-navbaritem>
            </div>
        </div>
        `;
    }
}

customElements.define('js-navbar', NavBar);
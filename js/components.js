class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="navbar">
            <a href="/">Home</a>
            <a href="/pages/games.html">Games</a>
            <a href="/pages/about.html">About</a>
            <a href="/pages/contact.html" class="right">Contact</a>
        </div>
        `;
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
            <a href="/">Home</a>
            <a href="/pages/games.html">Games</a>
            <a href="/pages/about.html">About</a>
            <a href="/pages/contact.html" class="right">Contact</a>
        </div>
        `;
    }
}

customElements.define('v-navbar', Navbar);
customElements.define('v-footer', Footer);
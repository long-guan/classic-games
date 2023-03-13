class header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="nav-cont">
                <div class="nav-items">
                    <div class="logo-title">
                        <img src="/classic-games/image/controller.svg" alt="" class="controller">
                        <div class="nav-title">Games From Long (Ago)</div>
                    </div>
                    <div class="home-btn nav-link">Home</div>
                    <div class="nav-link">Search</div>
                    <div class="nav-link">Games</div>
                    <div class="nav-link">History</div>
                    <div class="nav-link">About</div>
                    <div class="nav-link">Log in</div>
                </div>
                <hr class="separator">
            </div>
        `;
        console.log('Header component loaded');
    }
}

customElements.define('header-component', header);

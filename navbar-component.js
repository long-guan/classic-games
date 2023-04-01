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
                    <div class="nav-link about">About</div>
                    <div class="nav-link">Contact</div>
                </div>
                <hr class="separator">
            </div>
        `;
    }
}

customElements.define('header-component', header);

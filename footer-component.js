class footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <hr class="footer-separator">
                <div class='footer-social-cont'>
                    <div class="">
                        <img src="/classic-games/image/linkedin.svg" alt="" class="social">
                        <div>LinkedIn</div>
                    </div>
                    <div>
                        <img src="/classic-games/image/github.svg" alt="" class="social">
                        <div>GitHub</div>
                    </div>
                </div>
                <div>
                    Copyright 2023 | Long Guan
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', footer);

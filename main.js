class MarketPriceTicker extends HTMLElement {
    static observedAttributes = ["ccy-pair"];

    constructor() {
        super();
    }

    connectedCallback() {
        this.ccyPair = this.getAttribute("ccy-pair");
        this.ticker = window.setInterval(() => {
            this.#setText();
        }, 1000)
        this.#setText();
    }

    disconnectedCallback() {
        window.clearInterval(this.ticker);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "ccy-pair") {
            this.ccyPair = newValue;
            this.#setText();
        }
    }

    #setText() {
        this.innerHTML = `market price ${this.ccyPair}:  ${Math.random()}`;
    }
}

customElements.define("mkt-price-ticker", MarketPriceTicker);


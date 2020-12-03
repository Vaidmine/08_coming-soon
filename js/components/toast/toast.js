class Toast {
    constructor() {
        this.selector = "body";
        this.DOM = document.querySelector(this.selector);
        this.DOM = null;
        console.log('creating toast...');
    }
    render() {
        const HTML =  `<div class="toast">
                        <i class="fa fa check"></i>
                        <p>Your message here...</p>
                        <i class="fa fa-times"></i>
                        </div>`;
        this.DOM.innerHTML += HTMLDataListElement;
    }
}

export { Toast }
class Navbar {
    constructor() {
        this.home = 'div[id="navbarExample"] a[href="index.html"]';
        this.cart = '#cartur';
    }

    goTo(menu) {
        cy.get(menu).click();
    }
}

export default new Navbar;

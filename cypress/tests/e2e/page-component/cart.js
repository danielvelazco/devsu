import PlaceOrder from "./placeOrder";

class Cart {
    constructor() {
        this.totalAmount = "#totalp";
        this.placeOrderButton = "button[data-target='#orderModal']";
    }

    VerifyTotalAndPlaceOrder(expectedTotal) {
        cy.get(this.totalAmount, { timeout: 5000 }).should('have.text', expectedTotal);
        cy.get(this.placeOrderButton).click()
        cy.get(PlaceOrder.modal).should('be.visible');
        cy.get(PlaceOrder.title).should('have.text', 'Place order');
    }
}

export default new Cart;

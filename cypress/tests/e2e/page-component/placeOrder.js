class PlaceOrder {
    constructor() {
        this.modal = '#orderModal';
        this.title = '#orderModalLabel';
        this.totalAmount = '#totalm';
        this.inputName = '#name';
        this.inputCard = '#card';
        this.purchaseButton = "#orderModal button[class*='primary']";
    }

    fillFormAndPurchase(data) {
        cy.get(this.inputName).should('be.visible').type(data.name, {force: true});
        cy.get(this.inputCard).should('be.visible').type(data.card, {force: true});
        cy.get(this.purchaseButton).click();
    }
}

export default new PlaceOrder;

class ProductDetail {
    constructor() {
        this.title = "[id='tbodyid'] h2";
        this.addToCartButton = "[id='tbodyid'] a[class*='btn']";
    }

    verifyProductAndAddToCart(title, productName) {
        cy.get(title).should('have.text', productName)
        cy.get(this.addToCartButton).click()
    }
}

export default new ProductDetail;

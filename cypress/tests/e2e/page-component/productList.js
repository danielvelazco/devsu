class ProductList {
    constructor() {
        this.nokiaLumia1500 = '[src="imgs/Lumia_1520.jpg"]';
        this.nexus6 = '[src="imgs/Nexus_6.jpg"]';
    }

    pickOne(product) {
        cy.get(product).click()
    }
}

export default new ProductList;

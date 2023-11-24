/// <reference types="cypress" />

import ProductList from "./page-component/productList.js";
import ProductDetail from "./page-component/productDetail.js";
import NavBar from "./page-component/navBar.js";
import Cart from "./page-component/cart.js";
import PlaceOrder from "./page-component/placeOrder.js";
import PurchaseRecipe from "./page-component/purchaseRecipe.js";


describe('Purchases on demoblaze page', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com')
    })
  
    it('checkout products', () => {
      // Add product #1
      ProductList.pickOne(ProductList.nokiaLumia1500);
      ProductDetail.verifyProductAndAddToCart(ProductDetail.title, 'Nokia lumia 1520')
     
      // Go to home
      NavBar.goTo(NavBar.home)

      // Add product #2
      ProductList.pickOne(ProductList.nexus6)
      ProductDetail.verifyProductAndAddToCart(ProductDetail.title, 'Nexus 6')

      // Go to Cart
      NavBar.goTo(NavBar.cart)

      //Verify total amount in cart and checkout
      const expectedTotalInCart = "1470";
      Cart.VerifyTotalAndPlaceOrder(expectedTotalInCart)      
      PlaceOrder.fillFormAndPurchase({name: "Daniel", card: "424242424242"})

      // Check for successful purchase
      cy.get(PurchaseRecipe.confirmationMessage).should('have.text', 'Thank you for your purchase!')
    })
  })
  
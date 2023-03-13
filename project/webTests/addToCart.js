import LoginPage from '../pageObjects/login.page.js';
import InventoryPage from '../pageObjects/inventory.page.js';


describe('Add items to cart', () => {
  it('should add items to cart', async ()  => {
    await LoginPage.open('')
    await LoginPage.login('standard_user', 'secret_sauce')
        
    await InventoryPage.assertCartEmpty()

    await InventoryPage.addAllItemsToCart()
    await InventoryPage.assertCartCount('6')
  })

  it('should remove items from cart', async () => {
    await LoginPage.open('')
    await LoginPage.login('standard_user', 'secret_sauce')
        
    await InventoryPage.assertCartCount('6')

    await InventoryPage.removeAllItemsFromCart()
    await InventoryPage.assertCartEmpty()
  })
})
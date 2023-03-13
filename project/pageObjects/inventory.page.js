class InventoryPage {

    get addToCartBtn() {
        return $$('.btn_inventory')
      }

    async addAllItemsToCart() {
        this.addToCartBtn.forEach((button) => {
            button.click()
        })
    } 

    async removeAllItemsFromCart() {
        this.addToCartBtn.forEach((button) => {
            button.click()
        })
    } 
      
    async assertCartCount(count) {
        const number = await $('//*[@id="shopping_cart_container"]/a/span')
        await expect(number).toHaveText(count)
    }

    async assertCartEmpty() {
        const cart = await $('//*[@id="shopping_cart_container"]')
        await expect(cart).toBeDisplayed()
    }

    async getProductTitles() {
        const itemTitles = []
        const titleElements = await browser.$$('.inventory_item_name');
        for (let i = 0; i < titleElements.length; i++) {
          const title = await titleElements[i].getText()
          itemTitles.push(title)
        }
        return itemTitles;
    }

    async getProductPrice() {
        const itemPrices = []
        const priceElements = await browser.$$('.inventory_item_price');
        for (let i = 0; i < priceElements.length; i++) {
            const price = await priceElements[i].getText()
            itemPrices.push(price)
        }
        return itemPrices;
    }

    async getProductDescription() {
        const itemDescriptions = [];
        const descriptionElements = await browser.$$('.inventory_item_desc')
        for (let i = 0; i < descriptionElements.length; i++) {
            const description = await descriptionElements[i].getText()
            itemDescriptions.push(description)
        }
        return itemDescriptions
    }
}

export default new InventoryPage()
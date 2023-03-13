import InventoryPage from '../pageObjects/inventory.page.js'
import LoginPage from '../pageObjects/login.page.js'
import SecurePage from '../pageObjects/secure.page.js'


describe('Error messages displayed during login', () => {
    it('should not open other pages without loging in', async () => {
        await LoginPage.open('inventory.html')
        await expect(SecurePage.errorMessage).toHaveText(
            "Epic sadface: You can only access '/inventory.html' when you are logged in.")
    })

    it('should display username required error', async () => {
        await LoginPage.open('')
        await LoginPage.login('', 'secret_sauce')
        await expect(SecurePage.errorMessage).toHaveText(
            'Epic sadface: Username is required')
    })

    it('should display password required error', async () => {
        await LoginPage.open('')
        await LoginPage.login('standard_user', '')
        await expect(SecurePage.errorMessage).toHaveText(
            'Epic sadface: Password is required')
    })

    it('should not login with invalid credentials', async () => {
        await LoginPage.open('')
        await LoginPage.login('standard_user', 'incorrectpass')
        await expect(SecurePage.errorMessage).toHaveTextContaining(
            'Epic sadface: Username and password do not match any user in this service')
    })

    it('should not login with locked credentials', async () => {
        await LoginPage.open('')
        await LoginPage.login('locked_out_user', 'secret_sauce')
        await expect(SecurePage.errorMessage).toHaveTextContaining(
            'Epic sadface: Sorry, this user has been locked out.')
    })
})

describe('Login to the website', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open('')
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.inventoryPage).toHaveUrl(
            'https://www.saucedemo.com/inventory.html')
    })
})
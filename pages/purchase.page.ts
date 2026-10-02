import { Page } from '@playwright/test'

export class Purchase {
	private readonly page: Page
  private readonly cart: string = 'a[data-test="shopping-cart-link"]'
  private readonly checkoutButton: string = 'button[id="checkout"]'
  private readonly firstNameField: string = 'input[id="first-name"]'
  private readonly lastNameField: string = 'input[id="last-name"]'
  private readonly postalCodeField: string = 'input[id="postal-code"]'
  private readonly continueButton: string = 'input[id="continue"]'
  private readonly finishButton: string = 'button[id="finish"]'
  private readonly completeHeader: string = 'h2[data-test="complete-header"]'

	constructor(page: Page) {
		this.page = page
  }
  
  public async selectCart() {
    await this.page.locator(this.cart).click()
  }

  public async selectCheckout() {
    await this.page.locator(this.checkoutButton).click()
  }

  public async checkoutAsUser(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator(this.firstNameField).fill(firstName)
    await this.page.locator(this.lastNameField).fill(lastName)
    await this.page.locator(this.postalCodeField).fill(postalCode)
  }

  public async selectContinue() {
    await this.page.locator(this.continueButton).click()
  }

  public async selectFinish() {
    await this.page.locator(this.finishButton).click()
  }

  public async validateCompleteMessage(expectedMessage: string) {
    const completeMessage = await this.page.locator(this.completeHeader).textContent()
    if (completeMessage !== expectedMessage) {
      throw new Error(`Expected complete message to be ${expectedMessage} but found ${completeMessage}`)
    }
  }
}
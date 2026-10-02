import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = 'select[data-test="product-sort-container"]'
    private readonly itemPrice: string = 'div[data-test="inventory-item-price"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortItemsBy(sort: string) {
        await this.page.locator(this.sortDropdown).selectOption({ label: sort })
    }

    public async validateSortedByPrice(expectedCount: number, sort: string) {
        const priceTexts = await this.page.locator(this.itemPrice).allTextContents()
        if (priceTexts.length !== expectedCount) {
            throw new Error(`Expected ${expectedCount} items but found ${priceTexts.length}`)
        }

        const prices = priceTexts.map(price => parseFloat(price.replace('$', '')))
        let expectedPrices: number[]
        if (sort === 'Price (low to high)') {
            expectedPrices = [...prices].sort((a, b) => a - b)
        } else if (sort === 'Price (high to low)') {
            expectedPrices = [...prices].sort((a, b) => b - a)
        } else {
            throw new Error(`Unsupported price sort option ${sort}`)
        }

        if (prices.join() !== expectedPrices.join()) {
            throw new Error(`Expected prices sorted by ${sort} to be ${expectedPrices.join(', ')} but found ${prices.join(', ')}`)
        }
    }
}
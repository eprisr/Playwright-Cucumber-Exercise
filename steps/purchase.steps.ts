import { Then } from '@cucumber/cucumber'
import { getPage } from '../playwrightUtilities'
import { Purchase } from '../pages/purchase.page'

Then("I will select the cart \\(top-right)", async () => {
  await new Purchase(getPage()).selectCart()
})

Then("I will select checkout", async () => {
  await new Purchase(getPage()).selectCheckout()
})

Then("I will fill in the first name {string}, last name {string}, and zip code {string}", async (firstName: string, lastName: string, postalCode: string) => {
  await new Purchase(getPage()).checkoutAsUser(firstName, lastName, postalCode)
})

Then("I will select continue", async () => {
  await new Purchase(getPage()).selectContinue()
})

Then("I will select finish", async () => {
  await new Purchase(getPage()).selectFinish()
})

Then("I should see the text {string}", async (expectedMessage: string) => {
  await new Purchase(getPage()).validateCompleteMessage(expectedMessage)
})
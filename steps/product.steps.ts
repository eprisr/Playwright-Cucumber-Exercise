import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will sort the items by {string}', async (sort) => {
  await new Product(getPage()).sortItemsBy(sort);
});

Then('I should see all {int} items sorted by {string}', async (expectedCount, sort) => {
  await new Product(getPage()).validateSortedByPrice(expectedCount, sort);
});
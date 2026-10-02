Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then I will select the cart (top-right)
    Then I will select checkout
    Then I will fill in the first name 'John', last name 'Doe', and zip code '12345'
    Then I will select continue
    Then I will select finish
    Then I should see the text 'Thank you for your order!'
Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # REVIEW: Fix this failing scenario
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    # REVIEW: Add a step to validate the error message received
    Then I should receive the error "Epic sadface: Sorry, this user has been locked out."
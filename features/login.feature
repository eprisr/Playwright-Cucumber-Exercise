Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # REVIEW: Fix this failing scenario
    Then I should see the title "Swag Labs"

  Scenario Outline: Validate successful login as <user>
    Then I will login as '<user>'
    Then I should see the page header "Products"
  Examples:
    | user                    |
    | standard_user           |
    | problem_user            |
    | performance_glitch_user |
    | error_user              |
    | visual_user             |

  Scenario Outline: Validate login error message for <description>
    Then I will login as '<user>'
    # REVIEW: Add a step to validate the error message received
    Then I should receive the error "<error>"
  Examples:
    | description      | user            | error                                                                      |
    | locked out user  | locked_out_user | Epic sadface: Sorry, this user has been locked out.                        |
    | unknown user     | invalid_user    | Epic sadface: Username and password do not match any user in this service  |
    | missing username |                 | Epic sadface: Username is required                                         |

  Scenario Outline: Validate incorrect password error message for <description>
    Then I will login as '<user>' with password '<password>'
    Then I should receive the error "<error>"
  Examples:
    | description             | user            | password     | error                                                                      |
    | wrong password          | standard_user   | wrong_sauce  | Epic sadface: Username and password do not match any user in this service  |
    | wrong password case     | standard_user   | SECRET_SAUCE | Epic sadface: Username and password do not match any user in this service  |
    | missing password        | standard_user   |              | Epic sadface: Password is required                                         |
    | locked out user         | locked_out_user | wrong_sauce  | Epic sadface: Username and password do not match any user in this service  |

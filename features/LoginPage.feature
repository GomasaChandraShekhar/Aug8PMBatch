Feature: Login Functionality

  Scenario: Vefiry Login functionality using valid credentials
    Given User should be in login page
    When User enter "userId" and "password"
    And User clicks on Login button
    Then User should be in dashboard page

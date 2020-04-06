Feature: Check Search functionality

   The porpose of this is to check the search functionality

   Scenario: Verify if User can use the search functionality
      Given I go to any page
      When I perform a search of Transfer funds
      Then It should give me results of transfer funds

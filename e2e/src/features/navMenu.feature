Feature: Check nav menu
   The porpose of this is to check options available on the nav menu

   Scenario: Verify if User can go to the Online Banking Section by using the Nav Menu
      Given I go to the home page
      When I click on the Online Banking Section
      Then It should take me to the Online Banking Section

   Scenario: Verify if User can go to the Feedback Section by using the Nav Menu
      Given I go to the home page once again
      When I click on the Feedback Section
      Then It should take me to the Feedback Section
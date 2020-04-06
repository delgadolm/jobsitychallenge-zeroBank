Feature: Check nav to FAQ page

   The porpose of this is to check navi on the FAQ page

   Scenario: Verify if User can go to the FAQ page by clicking on the link located at the Feedback page
      Given I am at the homepage
      When I click on the Feedback on the nav Menu
      And  I click on the FAQ link
      Then It should take me to the FAQ page

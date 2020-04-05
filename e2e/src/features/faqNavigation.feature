Feature: Example for future reference

   The porpose of this is to take what's here so you can do your tests faster

   Scenario: Verify if User can go to the FAQ page by clicking on the link located at the Feedback page
      Given I am at the homepage
      When I click on the Feedback on the nav Menu
      And  I click on the FAQ link
      Then It should take me to the FAQ page

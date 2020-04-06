Feature: Example for future reference

   The porpose of this is to take what's here so you can do your tests faster

   Scenario: Verify if User can send a valid feedback form
      Given I am in the homepage
      When I click on the Feedback on the navi Menu
      And  I fill the form
      And  I click on send
      Then I should recieve the successful message

   Scenario: Verify if User can clear the fields on the feedback form
      Given I go to the homepage first
      When I click on the Feedback on the navig Menu
      And  I fill the form with any data
      And  I click on clear
      Then I should verify that each field is empty
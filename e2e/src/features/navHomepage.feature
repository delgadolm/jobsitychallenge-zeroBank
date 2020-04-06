Feature: Check nav on the homepage

   The porpose of this is to check all nav available on the homepage

   Scenario: Verify if User can go to the Online Banking Section by using the More Services button
      Given I go to the homepage
      When I click on More Services under Online Banking
      Then It should take me to Online Banking

   Scenario: Verify if User can go to the Login by clicking Checking Account Activity
      Given I go to the home page again
      When I click on Checking Account Activity
      Then It should take me to the Login Section
   
   Scenario: Verify if User can go to the Login by clicking Transfer Funds
      Given I'm on te homepage
      When I click on Transfer Funds
      Then It should take me to the Login

   Scenario: Verify if User can go to the Login by clicking My Money Map
      Given I go to the home page one more time
      When I click on My Money Map
      Then It should get me to the Login
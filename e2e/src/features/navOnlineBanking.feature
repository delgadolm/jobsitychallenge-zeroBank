Feature: Example for future reference

   The porpose of this is to take what's here so you can do your tests faster

   Scenario: Verify if User can go to the Login by clicking on the Account Summary Link
      Given I go to the Online Banking Section
      When I click on Account Summary
      Then It should take me to Login

   Scenario: Verify if User can go to the Login by clicking on the Account Activity Link
      Given I'm at Online banking
      When I click on Checking Account Activity Link
      Then It should take me to the Login Page
   
   Scenario: Verify if User can go to the Login by clicking on the Transfer Funds Link
      Given I'm on Online Banking
      When I click on Transfer Funds Link
      Then It should get me to the Login Screen

   Scenario: Verify if User can go to the Login by clicking on the Pay Bills Link
      Given I'm on Online banking
      When I click on Pay Bills Link
      Then It should send me to Login

   Scenario: Verify if User can go to the Login by clicking on the My Money Map Link
      Given I go to the Online banking once again
      When I click on My Money Map Link
      Then It should send me to the Login

   Scenario: Verify if User can go to the Login by clicking on the Online Statements Link
      Given I go to the Online banking one more time
      When I click on Online Statements
      Then It should be taken to the Login
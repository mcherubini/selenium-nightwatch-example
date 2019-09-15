@all

Feature: Google Search
@test1
Scenario: Searching Google

  Given I open Google`s search page
  Then the title is "Google"
  And the Google search form exists
  When i search "test" with result filtered in last week
@test2
Scenario: Searching Google again

  Given I open Google`s search page
  Then the title is "Google"
  And the Google search form exists
Feature: to test login functionality

    Scenario: to test login functionality
        Given User is on home page
        When User enter login details
        Then Home page should be displayed
        Then Upon logout
        And Logout should be successful
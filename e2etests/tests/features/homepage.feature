Feature: to test home page functionality

    Scenario: to test home page
        Given User is on home page
        When User enter login details
        Then Login should be successfull
        And Home page should be displayed
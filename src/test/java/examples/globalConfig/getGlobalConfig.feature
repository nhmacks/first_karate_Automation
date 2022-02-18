Feature: example global config

  Background: background example
    * def localmyVarName = myVarName
    Given print "Background Variable value ==>> ", localmyVarName

    Scenario: to get the value of username and password from karate-config.js
      * def localusername = username
      Given print "Scenario Variable  userName value =>>", localusername
      And print "Scenario Variable password value =>>", password


$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Accessing the Dashboard",
  "description": "This feature defines the different user access to a dashboard\r\nand the restrictions fro the same",
  "id": "accessing-the-dashboard",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@production"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Accessing with a valid user name and password",
  "description": "",
  "id": "accessing-the-dashboard;accessing-with-a-valid-user-name-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am a registered user on the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I understand user credentials",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should get access to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstep.i_am_a_registered_user_on_the_web_page()"
});

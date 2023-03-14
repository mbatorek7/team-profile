# Team Profile Generator

## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Description
With this repo, the user can easily create a team profile that can consist of manager(s), engineer(s), and intern(s). The web app created will displayed all necessary information and allow the user to email any employee that it chooses with the press of a button.

<p align="center">
    <a href="https://github.com/mbatorek7/hw10-team-profile"><img src="https://img.shields.io/badge/-See Live Site-success?style=for-the-badge"  alt="GitHub Repo" ></a>
</p>

## Screenshots

Here is what the final product looks like and how to use it:
![Final product.](./assets/images/final-product.gif)

## Installation
To clone this repo:

git clone git@github.com:mbatorek7/hw10-team-profile.git

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tests
To run the tests, open new terminal and type:

npm test

  ## Questions?
  - Github Profile: [https://github.com/mbatorek7](https://github.com/mbatorek7)
  - Email: [maegan.batorek@valpo.edu](maegan.batorek@valpo.edu)
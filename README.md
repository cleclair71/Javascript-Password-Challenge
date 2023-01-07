
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Javascript Password Challenge</h3>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Password Generator][screenshot]](https://courses.bootcampspot.com/courses/2861/files/2371221/preview)

This project is an application that generates a random password based on a specified criteria. The user is prompted for password length and character type preferences, and the input is validated to ensure that the proper criteria is selected. The generated password meets the specified criteria and is either displayed in an alert or written to the page. The user interface is responsive, ensuring that it adapts to multiple screen sizes. This application was created to provide users with a secure way to generate strong passwords for greater security.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

<!-- screenshots, code examples and demos work well in this space. -->
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add password button
- [x] Add password prompt criteria
- [ ] Add password length between 8-128 characters
- [ ] Add lowercase, uppercase, numeric, and/or special characters
- [ ] Generate password that is displayed in an alert or written to the page


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Cassie LeClair - cassieleclair71@gmail.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [README Template](https://github.com/othneildrew/Best-README-Template)
* [HTML DOM Element addEventListener()](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
* [syntaxfix](https://syntaxfix.com/question/4859/addeventlistener-is-not-a-function-why-does-this-error-occur)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- JavaScript Challenge: Password Generator
This week's Challenge requires you to create an application that an employee can use to generate a random password based on criteria they've selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. This week's coursework will teach you all the skills you need to succeed in this assignment.

<!-- The password can include special characters. If you're unfamiliar with these, see this list of Password Special Characters from the OWASP Foundation Links to an external site..

User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
Mock-Up
The following image shows the web application's appearance and functionality:

A screenshot displays a sample password generator.

How to Complete the Challenge
Follow these steps to complete the challenge:

IMPORTANT
Make sure to clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!

Clone the starter code Links to an external site..

Modify the code to meet the Acceptance Criteria.

Ensure that your work meets the full list of grading requirements below.

Reach out to your classmates and instructional support team for help if you need it.

Follow the submission instructions.

NOTE
After this week, the preceding steps will not be included in Challenge instructions in order to simulate a typical work experience where the developer determines how to solve an issue on their own.

Grading Requirements
NOTE
If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

A repository that has no code

A repository that includes a unique name but nothing else

A repository that includes only a README file but nothing else

A repository that only includes starter code

This Challenge is graded based on the following criteria:

Technical Acceptance Criteria: 40%
Satisfies all of the above acceptance criteria plus the following:

The Challenge should not produce any errors in the console when you inspect it using Chrome DevTools.
Deployment: 32%
Application deployed at live URL.

Application loads with no errors.

Application GitHub URL submitted.

GitHub repository that contains application code.

Application Quality: 15%
Application user experience is intuitive and easy to navigate.

Application user interface style is clean and polished.

Application resembles the mock-up functionality provided in the Challenge instructions.

Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a quality README file with description, screenshot, and link to deployed application.

How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the deployed application.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

NOTE
You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next Module.

Comments are disabled for graded submissions in BootCamp Spot. If you have questions about your feedback, please notify your instructional staff or the Student Success Manager. If you would like to resubmit your work for an improved grade, you can use the Resubmit Assignment button to upload new links. You may resubmit up to three times for a total of four submissions.--> -->
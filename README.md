# README.md Generator Using Node.js


## Description

A command-line application that uses Node.js to input your text responses to generate a README.md file for your project.



## User Story
  
```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project 
```
  
## Acceptance Criteria
  
``` 
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```


## Installation

To run this application, it would require the installation of `npm init` and `npm install inquirer@8.2.4`

## Usage

When you run `node index.js` on your project, within your command line you will be prompted with a series of questions. Each question represents a different segment of your README.md file. When you finish each prompt, the application will generate markdown each represented segment with your given responses. You are also given a list of commonly used licenses, upon selection of your license, the matching badge will show below to your README.md title.

To view a video on the usage of the application, [click here](https://app.castify.com/view/bc70e9ec-9edb-4aaf-8963-8ebd23418a42)

## Contributors
If you would like to contribute, feel free to fork the repo.

## Tests
To test the application, answer all prompts via `node.js`


## License

N/A


## Contact

✉️ Contact me with any questions: [email](mailto:jkjohnson673@gmail.com) , [GitHub](https://github.com/jjohnson673)


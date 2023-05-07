# OpenAI Documentation

### Getting Started

`git clone git@github.com:MARQUEZ93/plan-my-hikes.git`

`cd plan-my-hikes/backend/`

`npm install`

`cd template`

This project was used w/ Node v16.13.2 (https://www.freecodecamp.org/news/how-to-update-node-and-npm-to-the-latest-version/)

Generate an OpenAI API Key: https://platform.openai.com/account/api-keys

Set your api key in the `myKey.js` file

##### Save Results to CSV

Alter the list of prompts to ask Chat GPT whatever you want.

`node toCSV.js` to save results to a data.csv file & corresponding prompts to a prompts.csv file

##### Save Results to JSON

`node toJSON.js` to save results to a data.csv file & corresponding prompts to a prompts.csv file

##### Save JSON Results to Postgres (Must save results to JSON first^)

`node toPostgres.js` to save results to a Postgres database


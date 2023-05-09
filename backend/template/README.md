# OpenAI Documentation

### Getting Started

`git clone git@github.com:MARQUEZ93/plan-my-hikes.git`

`cd plan-my-hikes/backend/`

`npm install`

`cd template`

This project was used w/ Node v16.13.2

Generate an OpenAI API Key: https://platform.openai.com/account/api-keys

Set your api key in the `./myKey.js` file

### Save Results to CSV

Alter the list of prompts to ask Chat GPT whatever you want.

`node toCSV.js` to save results to a `./data.csv` file & corresponding prompts to a `./prompts.csv` file

### Save Results to JSON

`node toJSON.js` to save results to a ./data.json file. If you altered the key names (for example, you changed the  best, hidden_gem or crowded keys, you will have to make those changes in the ./toPostgres.js file - if you wish to save your results to a Postgres DB). 

### Save JSON Results to Postgres (Must save results to JSON first)

`node toPostgres.js` to save results to a Postgres database. You will have to run the command twice. The first time to create your Postgres table. 
Then read the instructions in the file to uncomment code that will seed the results from the `./data.json` file to your newly created table. Then run the command a second time. Don't forget to change column names etc if you changed the keys in the `./toJSON.js` file. The JSON file is especially usefully if you want to seed this data on production. 


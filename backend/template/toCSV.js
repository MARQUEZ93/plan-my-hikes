const fs = require('fs');
const _ = require('lodash');

const openai = require ('./openaiConfig');

/* Change the prompts below to whatever you want to ask Chat GPT */
const prompts = [
    'How can Blood Meridian be made successfully into a film?',
    'Please explain how the Federal Reserve works in simple terms',
    'I am interviewing for mid level software developer jobs. How can I stand out & make a good impression?'
];

async function queryOpenAI(prompt) {
    try {
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: "user", content: prompt }],
        /* max_tokens: https://platform.openai.com/docs/api-reference/completions/create#completions/create-max_tokens */
        max_tokens: 4050
      });
      console.log(completion.data.choices[0].message.content);

      saveToCSV(prompt, completion.data.choices[0].message.content)
    } catch (error) {
        if (error.response) {
            console.error(error.response.status, error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
        }
    }
};

/* The prompts will be saved to prompts.csv & results to data.csv */
async function saveToCSV(prompt, result) {
    const cleanedResult = result.replace(/(\r\n|\n|\r)/gm, ' '); // replace line breaks with spaces
    const resultData = `${cleanedResult}\n`;
    fs.appendFileSync('data.csv', `${resultData}`);
    fs.appendFileSync('prompts.csv', `${prompt}\n`);
};

function runFile () {
    prompts.forEach(prompt => {
        const result = queryOpenAI(prompt);
    });
};
runFile();
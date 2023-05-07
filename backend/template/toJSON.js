const fs = require('fs');
const _ = require('lodash');

const openai = require ('./openaiConfig');

/*  Alter the questions below. They will be iterated across a list of items.
    For example, the below questions are used for a list of national parks.
    The key & item, for example "best" AND "big bend national park", will be used the JSON key for the results. 
    In addition, the key & item will later used in the ./toPostgres file to set Database column names & as a Database row identifier.
*/
const questions = (item) => {
    return {
        "best": `What is the one of the single best experiences of ${item}?`,
        "hidden_gem": `What is a hidden gem of ${item}?`,
        "crowded": `What are the most crowded months to visit ${item}?`
    }
};

/*  Alter the items below. They will be iterated across the questions above. */
const items = ['Big Bend National Park', 'Acadia National Park', 'Los Glaciares National Park'];


items.forEach(item=>toJSON(item));

async function toJSON(item){
    const itemQuestions = questions(item);
    const questionsKeys = Object.keys(itemQuestions);
    let count = 0;
    const results = {};
    while (count < questionsKeys.length){
        const prompt = itemQuestions[questionsKeys[count]];
        results[questionsKeys[count]] = await query(prompt);
        count++;
    }

    const jsonFile = await fs.readFileSync('./data.json', (err, data) => {});

    // Parse the file contents into a JavaScript object
    const itemsObject = JSON.parse(jsonFile);

    const resultsKeys = Object.keys(results);

    const newItem = { name: item };

    let resultsCount = 0;

    while (resultsCount < resultsKeys.length){
        newItem[resultsKeys[resultsCount]] = results[resultsKeys[resultsCount]];
        resultsCount++;
    }

    itemsObject.items.push(newItem);

    const newData = JSON.stringify(itemsObject, null, 2);

    fs.writeFileSync('./data.json', newData, err => {
        if (err) {
            console.error(err);
        }
        console.log('New item added to data.json');
    });
};

async function query(prompt) {
    try {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 4050
        });
        return completion.data.choices[0].message.content;
    } catch (error) {
        if (error.response) {
            console.error(error.response.status, error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
        }
    }
};

const fs = require('fs');
const _ = require('lodash');

const openai = require ('./openaiConfig');

const best = (item) => {
    return `What is the one of the single best experiences of ${item}?`
};

const hiddenGem = (item) => {
    return `What is a hidden gem of ${item}?`
};

const crowded = (item) => {
    return `What are the most crowded months to visit ${item}?`
};

const items = ['Big Bend National Park', 'Acadia National Park', 'Los Glaciares National Park'];

items.forEach(item=>toJSON(item));

async function toJSON(prompt){

    const existingFile = await fs.appendFileSync('./data.json', (err, data) => {});

    // Parse the file contents into a JavaScript object
    const parksObject = JSON.parse(existingFile);

    const bestData = await getData(best(name));
    const hiddenGemData = await getData(hiddenGem(name));
    const busyData = await getData(busy(name));

    const newPark = {
      name: name,
      hiddenGem: hiddenGemData,
      best: bestData,
      busy: busyData
    };

    parksObject.parks.push(newPark);

    const newData = JSON.stringify(parksObject, null, 2);

    fs.writeFileSync('./data.json', newData, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('New park added to parks.json');
    });
};

async function getData(prompt) {
    try {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          temperature: 0
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

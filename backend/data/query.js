const fs = require('fs');

const _ = require('lodash');

const { tips, best, tough, schedule, hidden_gem, camping, busy } = require('./prompts');

const questions = [tips, best, tough, schedule, hidden_gem, camping, busy];

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const parks = require ('./parks');

const arg = process.argv[2];

prepJSONFile(parks[arg]);

async function prepJSONFile({name, title, route}){

  const existingFile = await fs.readFileSync('./data/json/parks.json', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
    // Parse the file contents into a JavaScript object
    const parksObject = JSON.parse(existingFile);
    const scheduleData = await getData(schedule(name));
    const hiddenGemData = await getData(hidden_gem(name));
    const campingData = await getData(camping(name));
    const tipsData = await getData(tips(name));
    const toughData = await getData(tough(name));
    const bestData = await getData(best(name));
    const busyData = await getData(busy(name));

    const newPark = {
      name: name,
      title: title,
      route: route,
      hidden_gem: hiddenGemData,
      schedule: scheduleData,
      best: bestData,
      tips: tipsData,
      tough: toughData,
      camping: campingData,
      busy: busyData
    };

    parksObject.parks.push(newPark);

    const newData = JSON.stringify(parksObject, null, 2);

    fs.writeFileSync('./data/json/parks.json', newData, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('New park added to parks.json');
    });
}

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

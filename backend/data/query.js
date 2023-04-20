import * as fs from "fs";
import _ from "lodash";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function getData(parkName, prompt) {
    try {
      const completion = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt: prompt
      });
      res.status(200).json({ result: completion.data.choices[0].text });
    } catch (error) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: 'An error occurred during your request.',
          }
        });
      }
    }
  }
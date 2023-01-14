const { Configuration, OpenAIApi } = require ("openai");
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const configuration = new Configuration({
    organization: "org-iO8B2uupLkdMh2IglGP5K6qg",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();


const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
});

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post("/", async(req,res)=>{
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
    });
    res.json({
        message: response.data.choices[0].text,
    })
})
app.listen(port,()=>{
  console.log("Example app listening at http://localhost:$(port)")  
})

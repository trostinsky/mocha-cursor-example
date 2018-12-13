const express = require("express");
const countWordsFromWikipedia = require("./utils/countWords");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// path + method = endpoint
// /wikipedia/count -> POST

// /account/?number=10
app.get("/account/", (req, res, next) => {
    const {number} = req.query;
    // Запрос к БД
    res.json({
        account: number,
        receive: "200$",
        spent: "175$"
    });
});

// REST API
app.get("/account/:number", (req, res, next) => {
    const {number} = req.params;
    // Запрос к БД
    res.json({
        account: number,
        receive: "200$",
        spent: "175$"
    });
});

app.post("/wikipedia/count/", async (req, res, next) => {
    // post, put, delete
    const {url} = req.body;
    const {word, count} = await countWordsFromWikipedia(url);
    res.json({
        word,
        count
    })
});

app.post("/product/price", async (req, res, next) => {
    // ...
});

// http://localhost:4067
app.listen(4067, () => {
    console.log("SERVER IS STARTED");
})
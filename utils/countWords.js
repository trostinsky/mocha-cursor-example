const {JSDOM} = require("jsdom");
module.exports = async function countWordsFromWikipedia(url){
    const wordsCount = {};
    // TODO: Доработать регулярку для проверки URL
    const wikipediaReg = /(wikipedia\.org){1}/gi; // g - много совпадений, i – регистронезависимость
    if(!wikipediaReg.test(url)){
        console.log("URL не из wikipedia");
    }
    const dom = await JSDOM.fromURL(url);
    const document = dom.window.document;
    const content = document.querySelector("#bodyContent .mw-parser-output").textContent;
    // TODO: Написать регулярку для исключения лишних символов.
    const clearContent = content.toLowerCase()
        .replace(/\n/gi, " ")
        .replace(/[\,\.""''\(\)\[\]0-9<>{}:?*;:%~$#@^"",\.]/gi, "");
    const wordsArray = content.split(" ");
    wordsArray.forEach((word, index) => {
        if(word.length <= 3){
            return;
        }
        if(word in wordsCount){
            wordsCount[word]++;
        } else {
            wordsCount[word] = 1;
        }
    });
    let maxCount = 0;
    let resultWord = '';
    for(let word in wordsCount){
        if(wordsCount[word] >= maxCount){
            maxCount = wordsCount[word];
            resultWord = word;
        }
    };
    console.log(resultWord, maxCount);
    return {
        word: resultWord,
        count: maxCount
    }
}
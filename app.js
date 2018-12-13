// 1. Получить статью +
// 2. Выделить из статьи только нужный текст +
// 3. Пройтись по каждому слову +
// 3.1 Если слово есть в объекте добавить + 1 +
// 3.2 Если слова нет в объекте добавить в объект. +
// 4. Отсоритровать объект по самому большому значению +
// 5. Выводим в консоль слово и его частоту. +
const countWordsFromWikipedia = require("./utils/countWords");

process.stdin.setEncoding('utf8');
console.log("Set your Wikipedia URL:")
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`URL: ${chunk}`);
        countWordsFromWikipedia(chunk);
    }
});
// 5 -> [1, 3, 5, 1, 4];
const {random, fill} = require("lodash");
module.exports = (length) => {
    if(!length || typeof length !== 'number' || length < 0){
        return [];
    }
    const array = new Array(length);
    fill(array, random(0, 1000));
    return array;
}
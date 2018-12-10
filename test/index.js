const {expect} = require("chai");
const getRandomArray = require("../utils/getRandomArray");
const clearName = require("../utils/clearName");
// Testing utils...
//   Testing getRandomArray...
//      x Get array with two elements
//      x Get another random two elements
//      x Get empty array if length is false (0, false, undefined, null)
//      x Get empty array if length isn't integer

let user, client, order = '';
let firstArray = null;
const randomLength = 2;
describe("Testing utils...", () => {
    before(async () => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve();
            }, 100);
        })
        user = 'Vlad';
        client = 'NeVlad';
        order = 'Feeding';
        return;
    })
    describe("Testing getRandomArray...", () => {
        it("Get array with two elements", () => {
            const array = getRandomArray(randomLength);
            expect(Array.isArray(array), "Проверяем массив ли это").to.be.true;
            expect(array, `Длинна равна ${randomLength}`).to.have.lengthOf(randomLength);
            firstArray = array;
        })
        it("Get another random two elements", () => {
            const array = getRandomArray(randomLength);
            expect(array, "Разные значения в массивах").to.not.deep.equal(firstArray);
        })
        it("Get empty array if length is false (0, false, undefined, null)", () => {
            const array = getRandomArray(false);
            expect(array).to.have.lengthOf(0);
        })
        it("Get empty array if length isn't positive integer", () => {
            const array = getRandomArray(-120);
            expect(array).to.have.lengthOf(0);
        })
    });

    describe("Testing clearName...", () => {
        const ORIGIN_NAME = "vlad13134";
        it("Clear numbers", () => {
            const name = clearName(ORIGIN_NAME);
            expect(name).to.be.equal("Vlad");
        });
        it("Default string for unexpected values", () => {
            const name = clearName(1245);
            expect(name).to.be.equal("Default");
        });
    });
});


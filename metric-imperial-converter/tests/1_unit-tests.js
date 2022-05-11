const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

	suite('Read number input correctly', () => {

		test('convertHandler should correctly read a whole number input', () => {
			assert.strictEqual(convertHandler.getNum('1'), 1)
			assert.strictEqual(convertHandler.getNum('-1'), -1)
		})

		test('convertHandler should correctly read a decimal number input', () => {
			assert.strictEqual(convertHandler.getNum('1.2'), 1.2)
			assert.strictEqual(convertHandler.getNum('-1.2'), -1.2)
		})

		test('convertHandler should correctly read a fractional input', () => {
			assert.strictEqual(convertHandler.getNum('1/2'), 0.5)
			assert.strictEqual(convertHandler.getNum('-1/2'), -0.5)
		})

		test('convertHandler should correctly read a fractional input with a decimal', () => {
			assert.strictEqual(convertHandler.getNum('2.5/5'), 0.5)
			assert.strictEqual(convertHandler.getNum('-3/1.5'), -2)
		})

		test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', () => {
			assert.throw(() => convertHandler.getNum('3/2/3'))
		})

		test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', () => {
			assert.strictEqual(convertHandler.getNum(), 1)
		})
	})
});
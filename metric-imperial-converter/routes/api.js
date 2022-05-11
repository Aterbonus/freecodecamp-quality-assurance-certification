'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    res.json(
      convertHandler.convert(
        convertHandler.getNum(req.query.input), 
        convertHandler.getUnit(req.query.input)
      )
    )
  })

};

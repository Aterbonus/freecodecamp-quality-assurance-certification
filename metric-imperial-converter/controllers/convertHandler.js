function getNumber(n) {
  return n.includes('.') ? Number.parseFloat(n) : Number.parseInt(n)
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    if (input === undefined) {
      return 1
    }

    const numbers = input.split('/')

    if (numbers.length > 2) {
      throw new Error('Double fraction not supported')
    }

    if (numbers.length === 2) {
      return getNumber(numbers[0]) / getNumber(numbers[1])
    }

    return getNumber(numbers[0])
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

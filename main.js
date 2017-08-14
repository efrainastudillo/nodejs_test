var obj = {};

  obj.hello = function() {
    return 'hello!';
  }
  obj.mult = function(a,b){
    return a*b;
  }
  obj.goodbye = function() {
    return 'goodbye!';
  }
  obj.add = function(a,b){
    return a + b;
  }

module.exports = obj;

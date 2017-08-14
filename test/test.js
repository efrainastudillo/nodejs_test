var myMod = require("../main.js");
var assert = require("assert");
var should = require('chai').should();

//var obj = myMod();

describe('My Module' , function(){
  var data = [
    {a:4, b:6, c: 10},
    {a:3, b:7, c: 10},
    {a:9, b:5, c: 14},
    {a:89,b:11,c: 100}
  ];
  it('should be an object', function(){
    myMod.should.be.a('object');
  });

  it('should return 4', function(){
    var result = myMod.add(2,2); 
    result.should.equal(4);
  })
  
  it('should return 16', function(){
    var result = myMod.mult(4,4); 
    result.should.equal(16);
  })

  it('should say Hello!', function(){
    var result = myMod.hello() 
    result.should.equal("hello!");
  })
  data.forEach(function(item){
    it( item.a + " + " + item.b + " should be equal to " + item.c , function(){
      var res = myMod.add(item.a, item.b);
      res.should.equal(item.c);
    });
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

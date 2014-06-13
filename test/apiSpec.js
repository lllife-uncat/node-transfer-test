var test = require("../app.js");
var tester = new test.Test();

/**
* TOD: AssertionError: undefined == "Invalid child type"
*/
exports.testCreateClient = function(unit) {
   tester.createClient(function(err, client){
     unit.equal(err, undefined);
     unit.notEqual(client, null);
     unit.done();
   });
}


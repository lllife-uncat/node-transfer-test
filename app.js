var soap = require("soap");
var defaultUrl = "http://localhost:8080/TransferService/QTransferWSImpl?wsdl";

function Test(url) {
  this.url = url || defaultUrl;
}

Test.prototype.createClient = function(callback) {
  soap.createClient(this.url, function(err, client){
    callback(err, client);
  });
};


exports.Test = Test;

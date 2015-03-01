var express = require('express');
var calculator = require('salario-liquido');
var app = module.exports = express();

function calculateNetSalary(querystring) {
  var grossSalary = querystring.grossSalary || 0;
  var dependents = querystring.dependents || 0;

  return calculator.netSalaryFor(grossSalary, dependents);
}

app.get('/calculate_net_salary', function(request, response) {
  var responseBody = calculateNetSalary(request.query);
  response.send(responseBody);
});


var fs = require('fs');
var dummyjson = require('dummy-json');
var template = fs.readFileSync('generating-dummy-json/hbs/myTemplate.hbs', {
    encoding: 'utf8'
});
var result = dummyjson.parse(template);
result = JSON.parse(result);
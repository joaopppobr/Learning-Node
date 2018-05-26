console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();
var res = notes.addNote();

var filteredArray = _.uniq(['andrew', 'john', 'andrew']);
console.log(filteredArray);
//console.log(_.isString(res))
//console.log(res);

//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err) {
//  if (err){
//    console.log('Unable to write file.');
//  }
//});

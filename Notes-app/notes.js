console.log('Starting notes.js');

module.exports.addNote = function() {
  console.log('addNote');
  return 'New Note';
};

module.exports.add = function(a, b) {
  return a+b;
}
// Simple JQuery Note Sample App

var Note = function(title, content) {
  this.title = title;
  this.content = content;
}

var printNote = function(note) {
  console.log(note);
}

var defaultNote = new Note('Default Note', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

printNote(defaultNote);

var appendNote = function(note) {
  var noteContainer = '.note-items';
  $(noteContainer).append("<div class='note-item col-md-3'><h3>" + note.title + "</h3><p>" + note.content + "</p></div>");
}
var addNote = function(note) {
  appendNote(note);
}


var addFamousNote = function() {
  $.getJSON('https://wisdomapi.herokuapp.com/v1/random?callback=?',function(data) {
    console.log(data);

    var note = new Note(data.author.name, data.content);
    addNote(note);

  })
}
addNote(defaultNote);

$('#addDefaultNote').click(function(e) {
    addNote(defaultNote);
});

$('#addFamousQuote').click(function(e) {
  addFamousNote();
})

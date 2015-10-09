var file = require('file.js');
var gui = require('nw.gui');

var title = "JEMP Editor";
var currentFile;

function clickInput(id) {
  var event = document.createEvent('MouseEvents');
  event.initMouseEvent('click');
  document.getElementById(id).dispatchEvent(event);
}

document.addEventListener('keyup', function (e) {
  if (e.keyCode == 'O'.charCodeAt(0) && e.ctrlKey) {
    openFile();
  } else if (e.keyCode == 'S'.charCodeAt(0) && e.ctrlKey) {
    saveFile();
  } else if (e.keyCode == 'N'.charCodeAt(0) && e.ctrlKey) {
    gui.Window.open('index.html');
  }
});

onload = function () {
  setTitle(title + " - Untitled");
  document.getElementById('open').addEventListener('change', function (e) {
    file.open(this.value, document);
    currentFile = this.value;
    setTitle(title + " - " + this.value);
  });

  document.getElementById('save').addEventListener('change', function (e) {
    file.save(this.value, document);
  });
}

function showNotification (message) {
  var notificationLabel = document.getElementById('notification');
  notificationLabel.textContent = message;
  notificationLabel.style.display = "block";
  setTimeout(function () {
    notificationLabel.style.display = "none";
  }, 2000);
}

function setTitle (title) {
  document.title = title;
}

function saveFile () {
  if(currentFile) {
    file.save(currentFile, document);
    showNotification('Changes Saved');
  } else {
    clickInput('save');
  }
}

function openFile () {
  clickInput('open');
}
 // File Menu

var menu = new gui.Menu({type: 'menubar'});
menu.append(new gui.MenuItem( {
  label: 'File',
  submenu: new gui.Menu()
}));

menu.items[0].submenu.append(new gui.MenuItem({
  label: 'Open',
  click: function () {
    openFile();
  }
}));

menu.items[0].submenu.append(new gui.MenuItem({
  label: 'Save',
  click: function () {
    saveFile();
  }
}));

menu.items[0].submenu.append(new gui.MenuItem({
  type: 'separator'
}));

menu.items[0].submenu.append(new gui.MenuItem({
  label: 'Close',
  click: function () {
    gui.Window.get().close();
  }
}));

gui.Window.get().menu = menu;

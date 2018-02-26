const fs = require('fs')
const electron = require('electron')
const app = electron.app

exports.load = function () {
  editor = document.getElementById('editor')
  var paths = dialog.showOpenDialog( { properties: ['openFile', 'createDirectory'] } )
  if (typeof path !== 'undefined') {
    editor.innerHTML = fs.readFileSync(paths[0])
    console.log('Memo was loaded!')
  }
}

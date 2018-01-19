const fs = require('fs')
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')

exports.load = function () {
  editor = document.getElementById('editor')
  editor.innerHTML = fs.readFileSync('memo.md')
  process.stdout.write('Memo was loaded!\n')
}

exports.save = function (editor) {
  process.stdout.write('save Command\n')
  var window = new BrowserWindow()
  window.loadURL(path.join(__dirname, 'index.html'))
  fs.writeFileSync(memo)
  process.stdout.write('Memo was saved!\n')
}

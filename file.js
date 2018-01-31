const fs = require('fs')
const electron = require('electron')
const app = electron.app
const path = require('path')

exports.load = function () {
  editor = document.getElementById('editor')
  editor.innerHTML = fs.readFileSync('memo.md')
  process.stdout.write('Memo was loaded!\n')
}

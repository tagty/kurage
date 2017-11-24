const fs = require('fs')

exports.load = function () {
  editor = document.getElementById("editor")
  editor.innerHTML = fs.readFileSync('memo.md')
  process.stdout.write('Memo was loaded!\n')
}

// exports.save = function () {
//   process.stdout.write('save!')
//   // 本文を書き出す
//   fs.writeFileSync(memo)
// }

// Dialogを出す

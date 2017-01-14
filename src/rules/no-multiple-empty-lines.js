var rule = 'no-multiple-empty-lines';

function noMulitpleEmptyLines(unused, file) {
  var errors = [];
  var lines = file.content.split(/\r\n|\r|\n/);
  for (var i = 0; i < lines.length - 1; i++) {
    if (lines[i].trim() === '' && lines[i + 1].trim() == '') {
      errors.push({message: 'Multiple empty lines are not allowed',
                   rule   : rule,
                   line   : i + 2});
    }
  }
  return errors;
}

module.exports = {
  name: rule,
  run: noMulitpleEmptyLines
};

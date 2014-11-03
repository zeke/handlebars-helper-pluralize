var inflect = require("i")()

module.exports = function(count, word) {
  return Number(count) === 1 ? inflect.singularize(word) : inflect.pluralize(word)
}

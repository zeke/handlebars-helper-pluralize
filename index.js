var inflect = require("i")()

module.exports = function(count, word, includeCount) {
  var result = Number(count) === 1 ? inflect.singularize(word) : inflect.pluralize(word)

  if (includeCount === true || includeCount === "true") {
    result = String(count) + " " + result
  }

  return result
}

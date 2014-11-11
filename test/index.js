var pluralize = require("..")
var test = require("tap").test

test("pluralize", function (t) {
  t.equal(pluralize(1, "monkey"), "monkey")
  t.equal(pluralize(1, "monkeys"), "monkey")
  t.equal(pluralize(0, "message"), "messages")
  t.equal(pluralize(2, "person"), "people")
  t.equal(pluralize(500000, "module"), "modules")
  t.equal(pluralize(-1, "day"), "days")
  t.equal(pluralize(365, "pony"), "ponies")
  t.equal(pluralize(365, "pony", true), "365 ponies")
  t.equal(pluralize(365, "Dog", true), "365 Dogs", "preserves case")
  t.end()
})

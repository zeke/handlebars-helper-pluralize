var express = require("express")
var hbs = require("hbs")
hbs.registerHelper("pluralize", require("handlebars-helper-pluralize"))
var app = express()
app.set("view engine", "hbs")
// etc...

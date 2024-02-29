"use strict";
/**
 * Required External Modules
 */
exports.__esModule = true;
var express_1 = require("express");
var path = require("path");
var PORT = 1001;
var result_routes_js_1 = require("./routes/result-routes.js");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true })); //body parsing middleware with the built in express body-parser in order to populate the req.body with our inputs
app.use(express_1["default"].static(path.join(__dirname, "public")));
app.use("/", result_routes_js_1["default"]); // route to display our data   (internal Middleware)

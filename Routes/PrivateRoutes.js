//use a protect middleware to check if the user has a token to access to a route
//This will be used in Controllers/PrivateControllers.js
const express = require ('express')
const router = express.Router()
const {getPrivateRoute} = require("../Controllers/PrivateController")
const {protect} = require ("../Middleware/AuthProtection")


router.route("/").get(protect, getPrivateRoute)

module.exports = router
const express = require("express");
const UserController = require("../controllers/user");

//se define la ruta sign up para registrar usuario
const api = express.Router();

api.post("/sign-up", UserController.signUp);

module.exports = api;

const express = require("express");
const UserController = require("../controllers/user");
const md_auth = require("../middlewares/authenticated");
//se define la ruta sign up para registrar usuario
const api = express.Router();

api.post("/sign-up", UserController.signUp);
api.post("/sign-in", UserController.signIn);
api.get("/users-active", [md_auth.ensureAuth], UserController.getUsersActive);

api.put(
  "/activate-user/:id",
  [md_auth.ensureAuth],
  UserController.activateUser
);
api.put("/update-user/:id", [md_auth.ensureAuth], UserController.updateUser);
api.get("/users", [md_auth.ensureAuth], UserController.getUsers);

api.post(
  "/sign-up-manager",
  [md_auth.ensureAuth],
  UserController.signUpManager
);
module.exports = api;

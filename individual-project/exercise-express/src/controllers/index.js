const authControllers = require("./auth");
const employeeControllers = require("./employees");
const postControllers = require("./posts");
const userControllers = require("./users")


module.exports = {
  employeeControllers,
  authControllers,
  postControllers,
  userControllers
}
const express = require("express");
const OpenApiValidator = require("express-openapi-validator");
const nnn = require("nnn-router");
const app = express();
const router = express();

const options = {
  routeDir: "/routes",
  baseRouter: router,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  OpenApiValidator.middleware({
    apiSpec: "./api.yaml",
    validateRequests: true,
    validateResponses: true,
  })
);

app.use(nnn(options));

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});

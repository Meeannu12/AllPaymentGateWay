const express = require("express");
const { getToken, payOut } = require("../controller/planetC.controller");
const planetPayOutRouter = express.Router();

planetPayOutRouter.get("/", getToken);
planetPayOutRouter.post("/payout", payOut);

module.exports = planetPayOutRouter;

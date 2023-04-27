const express = require("express");

const wilderRoutes = require("./wilder.routes.js");
const skillRoutes = require("./skill.routes.js");

const router = express.Router();

router.use("/wilder", wilderRoutes);
router.use("/skill", skillRoutes);

module.exports = router;

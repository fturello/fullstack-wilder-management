const express = require("express");

const skillController = require("../controllers/skill.controller");

const router = express.Router();

router.post("/", skillController.create);
router.get("/", skillController.read);
router.put("/:id", skillController.update);
router.delete("/:id", skillController.destroy);

module.exports = router;

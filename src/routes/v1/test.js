const { Router } = require("express");
const { postTest, getTest } = require("../../controllers/test");

const router = Router();

router.get("/", getTest);
router.post("/", postTest);

module.exports = router;

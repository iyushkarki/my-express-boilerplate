const { Router } = require("express");
const testRoute = require("./test");

const router = Router();

router.use("/v1/test", testRoute);

module.exports = router;

const Test = require("../models/Test");

async function postTest(req, res, next) {
  try {
    const { name } = req.body;

    if (!name) {
      return res.send(404);
    }

    const createTest = await Test.create({ name });

    return res.status(201).json({
      success: true,
      data: createTest,
    });
  } catch (error) {
    next(error);
  }
}

async function getTest(req, res, next) {
  try {
    const tests = await Test.find();

    return res.status(201).json({
      success: true,
      data: tests,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { postTest, getTest };

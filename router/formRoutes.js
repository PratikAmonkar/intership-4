const express = require("express");
const {getForm, uploadForm } = require("../controller/formController");

const router = express.Router();

router.route("/").get(getForm);
router.route("/form").post(uploadForm);

module.exports = router;

// -----------------------------------------Express-----------------------------------------
const express = require("express");
const router = express.Router();
// -----------------------------------------Multer Image Uploading-----------------------------------------
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// -----------------------------------------Config-----------------------------------------
const config = require("config");

router.get("/", (req, res) => {});
router.post("/", upload.single("image"), (req, res) => {
	let file = req.file;
	// req.body
});
router.put("/id:", (req, res) => {});
router.delete("/id:", (req, res) => {});

module.exports = router;

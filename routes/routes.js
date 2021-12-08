const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");
const imageController = require("../controller/image.controller");
const pdfController = require("../controller/pdf.controller");

router.get("/hello", (req, res) => {
  res.status(200).send("Hello from server!");
});

router.post("/generate-pdf", pdfController.generatePdf);
router.post("/add-image-to-server", imageController.copyImage);
router.get("/find-all-users", userController.findUsers);
router.post("/create-user", userController.addUser);
router.get("/find-user-by-id/:id", userController.findUserById);
router.delete("/delete-by-id/:id", userController.deleteById);
router.put("/update-user/:id", userController.updateUser);

module.exports = router;

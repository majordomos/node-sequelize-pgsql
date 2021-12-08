const fs = require("fs");
const path = require("path");
const imagesDir = path.join(__dirname, "../images");

const imageController = {
  copyImage: copyImage,
};

function copyImage(req, res) {
  const pathToImage = req.body.pathToImage;
  const fileName = req.body.pathToImage.split("/");
  const destination = imagesDir + "/" + fileName[fileName.length - 1];
  let result = "File copied to server";
  console.log(destination);
  fs.copyFile(pathToImage, destination, function (err) {
    if (err) {
      result = "File not found";
    }
    res.send(result);
  });
}

module.exports = imageController;

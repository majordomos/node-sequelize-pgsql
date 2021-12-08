const pdfController = {
  generatePdf: generatePdf,
};

function generatePdf(req, res) {
  res.send("ok");
}

module.exports = pdfController;
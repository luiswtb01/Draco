function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Fundamentos del Desarrollo Web')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

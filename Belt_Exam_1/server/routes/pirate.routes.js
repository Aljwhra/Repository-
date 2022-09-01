const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
  app.get("/api/pirates/", PirateController.findAllPirates);
  app.get("/api/pirates/:id", PirateController.findOneSinglePirate);
  app.put("/api/pirates/update/:id", PirateController.updateExistingPirate);
  app.post("/api/pirates/new", PirateController.createNewPirate);
  app.delete("/api/pirates/delete/:id", PirateController.deleteAnExistingPirate);
}; 
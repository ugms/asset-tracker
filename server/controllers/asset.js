module.exports = (app, db) => {

  // CRUD User - Create
  app.post("/assets", (req, res) =>
    db.asset.create({
      chassie: req.body.chassie,
      current_user: req.body.current_user,
      previous_user: req.body.previous_user,
      name2: req.body.name2,
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      os: req.body.os,
      serial_number: req.body.serial_number,
      purchase_date: req.body.purchase_date,
      notes: req.body.notes
    })
    .then( (result) =>
      res.json(result) )
  );

  // CRUD User - Index All
  app.get( "/assets/", (req, res) =>
    db.asset.findAll()
    .then( (result) =>
      res.json(result))
  );

  // CRUD User - Update
  app.put( "/assets/:id", (req, res) =>
    db.asset.update({
      chassie: req.body.chassie,
      current_user: req.body.current_user,
      previous_user: req.body.previous_user,
      name2: req.body.name2,
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      os: req.body.os,
      serial_number: req.body.serial_number,
      purchase_date: req.body.purchase_date,
      notes: req.body.notes
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then( (result) =>
      res.json(result) )
  );

  // CRUD User - Destroy
  app.delete( "/assets/:id", (req, res) =>
    db.asset.destroy({
      where: {
        id: req.params.id
      }
    })
    .then( (result) =>
      res.json(result) )
  );
}

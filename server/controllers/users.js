export default function(app, db) {
  // CRUD User - Create
  app.post("/users", (req, res) => {
    console.log(req);
    db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then(result => res.json(result));
  });

  // CRUD User - Index All
  app.get("/users/", (req, res) => {
    db.User.findAll().then(result => res.json(result));
  });

  // CRUD User - Update
  app.put("/post/:id", (req, res) => {
    db.user
      .update(
        {
          username: req.body.username,
          password: req.body.password
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(result => res.json(result));
  });

  // CRUD User - Destroy
  app.delete("/users/:id", (req, res) => {
    db.user
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => res.json(result));
  });
}

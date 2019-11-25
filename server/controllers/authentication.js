export default function(app, db) {

  // Helper Function (For Authentication)
  const getUser = async obj => {
    return await db.User.findOne({
    where: obj,
    });
  };

  // Test login route
  app.post("/auth-login", async function(req, res, next) {
    const { username, password } = req.body;
    if (username && password) {
      // we get the user with the name and save the resolved promise
      returned
      let user = await getUser({ username });
      if (!user) {
        res.status(401).json({ msg: "No such user found", user });
      }
     if (user.password === password) {
        // from now on we’ll identify the user by the id and the id is
        // the only personalized value that goes into our token
        let payload = { id: user.id };
        let token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({ msg: "ok", token: token });
      } else {
        res.status(401).json({ msg: "Password is incorrect" });
      }
    }
  });

  // Sample Protected Route
  app.get("/protected", passport.authenicate("jwt", {session: false}), function(req, res) {
    res.json({msg: "Success, you are seeing this because you are authorized"});
  });

}

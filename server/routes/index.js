const express = require("express");
const router = express.Router();

router.route("/cards").get((req, res) => {
  return new req.database.Card()
    .fetchAll()
    .then(cards => {
      return res.json(cards);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});
// .post((req, res) => {
//   const username = req.body.username;
//   return new req.database.User({ username }).save()
//     .then((user) => {
//       return res.json({ success: true });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;

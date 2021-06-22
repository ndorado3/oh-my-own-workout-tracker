const router = require("express").Router();
const db = require("../models/workout");

//get all workouts
router.get("/api/workouts", (req, res) => {
  db.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//submit new workouts
router.post("api/workouts", ({ body }, res) => {
  db.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//retrieve info from the range page
router.get("/api/workouts/range", ({}, res) => {
  db.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//update workouts
router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//export API routes
module.exports = router;

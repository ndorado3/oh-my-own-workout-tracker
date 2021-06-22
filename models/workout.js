const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//new workout schema
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise",
      },
      duration: {
        type: Number,
        required: "Enter exercise duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

//Create moongose model workout
const Workout = mongoose.model("workout", workoutSchema);

//export workout model
module.exports = Workout;

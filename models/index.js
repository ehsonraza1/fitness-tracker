const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: Date,
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Workout Name is Required",
      },

      type: {
        type: String,
        trim: true,
        required: "Type of workout is Required",
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
      duration: {
        type: Number,
        required: "Please enter duration of your workout",
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

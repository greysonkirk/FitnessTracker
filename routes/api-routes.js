const db = require("../models");


module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find()
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.create({})
            .then(dbWorkout => {
                console.log("works")
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
}
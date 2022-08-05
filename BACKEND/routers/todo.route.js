
const router = require('express').Router();
const Exercise = require('../models/Todo');

// Display all Todo
router.route('/').get((req,res)=>{

    Exercise.find()
        .then((exercises) => res.json(exercises)) // List all exercises
        .catch((err)=>res.json(err.message)); // If err throw err
});

// Add Todo
router.route("/add").post((req,res)=>{

    const userID = Number.parseInt(req.body.userID);
    const titel = req.body.titel;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const Todo = new Exercise({
        userID : userID,
        titel : titel,
        description : description,
        date : date,
    });

    Todo.save()
        .then(()=> res.json('Todo added'))
        .catch((err)=> res.json(err.message));

});

// Display Todo find
router.route('/get/:id').get((req,res)=>{

    Exercise.findById(req.params.id)
        .then((Todo)=> res.json(Todo))
        .catch((err)=> res.json('Err'+ err));
});

// Delete Todo
router.route('/delete/:id').delete((req,res)=>{

    Exercise.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Todo deleted'))
        .catch((err)=> res.json(err));
});

// Updating Todo
router.route('/update/:id').put((req,res)=>{

    Exercise.findById(req.params.id)
        .then((Todo)=>{
            Todo.userID = Number.parseInt(req.body.userID);
            Todo.titel = req.body.titel;
            Todo.description = req.body.description;
            Todo.date = Date.parse(req.body.date);

            Todo.save()
                .then(()=>res.json('Todo updated'))
                .catch((err)=> res.json(err));
        });
});

module.exports = router;
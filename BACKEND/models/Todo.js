const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({

      userID: {
        type: Number,
        required: true,
        
      },
      titel: {
        type: String,
        required: true,
      
      },
      description: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      }},
      {

      timestamps: true,

});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
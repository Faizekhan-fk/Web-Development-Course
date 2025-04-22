// import mongoose from "mongoose";
// import express from "express"
// import { Todo } from "./models/Todo.js";

// let conn = await mongoose.connect("mongodb://localhost:27017/todo")
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   const todo = new Todo({title: "hey this is Todo", desc: "this is the Description of Todo", isDone: "false"}) 
//   Todo.bulkSave()
//   res.send('Hello World!')

// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
  
  // Start the server after successful DB connection
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

}).catch(err => {
  console.error("MongoDB connection error:", err);
});

// Route to create a new Todo
app.get('/', async (req, res) => {
  try {
    const todo = new Todo({
      title: "hey this is Todo",
      desc: "this is the Description of Todo",
      isDone: false,
      days: 5
    });

    await todo.save();
    res.send('Todo saved successfully!');
  } catch (error) {
    res.status(500).send('Error saving Todo: ' + error.message);
  }
});

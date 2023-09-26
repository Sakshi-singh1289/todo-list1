const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port 
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());

//import routes
const TodoItemRoute = require('./routes/todoItems');


const mongoURI = "mongodb://127.0.0.1:27017/todo-list?directConnection=true"


//connect to mongodb ..
mongoose.connect(mongoURI)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))



app.use('/', TodoItemRoute);
app.use('/api/auth', require('./routes/auth'))



//connect to server
app.listen(PORT, () => console.log("Server connected"));
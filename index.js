const express = require("express")
const app = express();
const mongoose = require("mongoose")
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoute);

mongoose.connect('mongodb://127.0.0.1:27017/')
  .then(() => {console.log('Connected to MongoDB Database!')
  app.listen(3000,()=>{
    console.log("Server started on port 3000");
})
})
.catch((err)=>{console.log('Connection Failed!',err)});


app.get("/",(req,res)=>{
  res.send("Hello from GET API");
})


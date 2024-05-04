const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const ProductRouter = require("./routers/ProductRouter");
const UserRouter=require("./routers/UserRouter")
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(ProductRouter);
app.use(UserRouter);

app.listen(8096,()=>{
    console.log("Server started!!!")
});
const express = require ("express");
const app = express();
const port = 2341;
const sequelize = require("./database/database");
const useRcontroller = require ("./routers/userRouter");
const posTcontroller = require ("./routers/postRouter");


app.use(express.json());

app.use(useRcontroller);
app.use(posTcontroller);


const luckyinfotechDB = async()=>{
    try{
        await sequelize.authenticate();
        console.log("connected successfully");
    
    }catch (e){
        console.log ("Unable to connect to database", error.message)
    }
}

// sequelize.authenticate().then( ()=>{
//         console.log ("Server running successfully")
//     }
// ).catch((e)=>{
// console.log("We encoutered server error", error.message)
// })

luckyinfotechDB();


app.listen(port,()=>{
    console.log (`Server running perfectly on PORT: ${port}`)

})
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

// midlleware to read the json 
app.use(express.json());

app.post("/signup", async (req, res) => {

    // creating a new instance of the user model
    const user = new User(req.body);

    try {
        await user.save()
        res.send("User added succesfully")
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message)
    }

})

connectDB()
    .then(() => {
        console.log("Database connection established...");
        app.listen(7777, () => {
            console.log("Server is successfully listening on port 7777...")
        })
    })
    .catch((err) => {
        console.log("Database cannot be connected", err);

    })




// BLNS6Hywkbm7D9nU
// mongodb+srv://ankushs5252:BLNS6Hywkbm7D9nU@cluster0.jmnmdss.mongodb.net/


























































// let name = {
//     firstName : "Ankush",
//     lastName : "Singh",

// }

//  let printFullName = function (hometown,city) {
//         console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + city)
//     }

// // name.printFullName();

// let name2 = {
//     firstName:"Sachin",
//     lastName:"Tendulkar",
// }

// // function borrowing 
// // -> call method is used to invoke a function directly by pasising in the reference which points to the this variable
// //inside the method. Apply is same as call 
// // -> the only difference in call and apply method is the way we pass the arguments
// // -> first argument is the refrence to the this variable and second is that we pass a list of arguments
// printFullName.call(name,"Kot","Hamirpur");
// printFullName.apply(name2,["Tauni Devi", "Hamirpur"]);

// let printMyName = printFullName.bind(name2,"Tauni Devi", "Hamirpur");
// console.log("printMyName",printMyName)
// printMyName();

// // bind method looks similar to the call method, but instead of directly calling the method the bindmethods binds the mehod
// // with a object and returns us the copy 







app.use("/user",
    (req, res, next) => {
        //request handler 
        console.log("Handler 1")
        res.send("response handler 1 ")
        // next()
    },
    (req, res) => {
        console.log("Handler 2")
        res.send("response handler 2 ")

    }
)


app.listen(3000, () => {
    console.log("Server Started")
})


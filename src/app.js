const express = require("express");

const app = express();

const {adminAuth, userAuth} = require("./middlewares/auth")
//one handler can have muliple route handler 
// middleware chain, 
//handle auth middleware for all request, Get Post

app.use("/admin",adminAuth);


app.get("/user", userAuth,(req,res)=> {
    res.send("User Data Sent")
})

app.get("/admin/getAllData", (req,res) => {
    //logic , of checking ,  check if the request is authorized
    res.send("All data sent")
})

app.get("/admin/deleteUser", (req,res)=> {
 res.send("Deleted a user")
})
 
app.listen(7777, () => {
    console.log("Server is running")
})



























































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

